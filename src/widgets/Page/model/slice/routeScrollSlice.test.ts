import { RouteScrollSchema } from '../types/routeScrollSchema';
import { routeScrollActions, routeScrollReducer } from './routeScrollSlice';

describe('routeScrollSlice.test', () => {
    test('test setScrollPosition', () => {
        const state: DeepPartial<RouteScrollSchema> = {
            scrollMap: {
                'article/': 100,
            },
        };
        expect(
            routeScrollReducer(
                state as RouteScrollSchema,
                routeScrollActions.setScrollPosition({
                    path: 'article/1',
                    position: 300,
                }),
            ),
        ).toEqual({
            scrollMap: {
                'article/': 100,
                'article/1': 300,
            },
        });
    });
});
