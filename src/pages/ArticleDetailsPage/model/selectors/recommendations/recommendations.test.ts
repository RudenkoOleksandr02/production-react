import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from './recommendations';

describe('recommendations.test', () => {
    test('should return is loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    isLoading: true,
                },
            },
        };

        expect(
            getArticleRecommendationsIsLoading(state as StateSchema),
        ).toEqual(true);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    error: 'error',
                },
            },
        };

        expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
            'error',
        );
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(
            getArticleRecommendationsIsLoading(state as StateSchema),
        ).toEqual(false);
        expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
