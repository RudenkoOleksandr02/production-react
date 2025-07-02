import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('should return object auth data', () => {
        const data = {
            id: '1',
            username: 'User',
            avatar: 'link',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty user', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
