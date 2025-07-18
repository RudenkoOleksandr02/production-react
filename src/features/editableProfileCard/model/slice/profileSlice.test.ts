import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Sasha',
    lastname: 'Rudenko',
    username: 'admin',
    age: 23,
    country: Country.Ukraine,
    currency: Currency.USD,
    city: 'Obukhiv',
    avatar: 'path',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { first: 'Pasha' },
            readonly: false,
            validateErrors: [],
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { first: 'Pasha' },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({
                first: 'Sasha',
            })),
        ).toEqual({ form: { first: 'Sasha' } });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({ isLoading: true, validateErrors: undefined });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });
});
