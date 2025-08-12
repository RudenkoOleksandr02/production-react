import { StateSchema } from '@/app/providers/StoreProvider';
import { getRouteScroll, getRouteScrollByPath } from './routeScrollSelectors';

describe('routeScrollSelectors.test', () => {
    test('should return scroll map object', () => {
        const state: DeepPartial<StateSchema> = {
            routeScroll: {
                scrollMap: {
                    'article/': 300,
                    'article/1': 150,
                },
            },
        };
        expect(getRouteScroll(state as StateSchema)).toEqual({
            'article/': 300,
            'article/1': 150,
        });
    });
    test('should return position by path', () => {
        const state: DeepPartial<StateSchema> = {
            routeScroll: {
                scrollMap: {
                    'article/': 300,
                    'article/1': 150,
                },
            },
        };
        expect(getRouteScrollByPath(state as StateSchema, 'article/')).toEqual(
            300,
        );
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            routeScroll: {
                scrollMap: {},
            },
        };
        expect(getRouteScroll(state as StateSchema)).toEqual({});
        expect(getRouteScrollByPath(state as StateSchema, 'article/')).toEqual(
            0,
        );
    });
});
