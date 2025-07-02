import { StateSchema } from 'app/providers/StoreProvider';
import { getUserMounted } from './getUserMounted';

describe('getUserMounted.test', () => {
    test('_mounted should be true', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _mounted: true,
            },
        };
        expect(getUserMounted(state as StateSchema)).toEqual(true);
    });
    test('should work with empty user', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getUserMounted(state as StateSchema)).toEqual(undefined);
    });
});
