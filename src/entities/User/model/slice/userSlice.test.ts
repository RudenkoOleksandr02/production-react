import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { UserSchema } from '../types/userSchema';
import { userActions, userReducer } from './userSlice';

const data = {
    id: '1',
    username: 'User',
    avatar: 'link',
};

describe('userSlice.test', () => {
    test('test set auth data', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
        };
        expect(userReducer(state as UserSchema, userActions.setAuthData(data))).toEqual({
            authData: data,
        });
    });
    test('test init auth data', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
            _mounted: false,
        };

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

        expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({
            authData: data,
            _mounted: true,
        });
    });
    test('test logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: data,
        };
        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
