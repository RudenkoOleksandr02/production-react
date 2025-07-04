import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
    test('should return is loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });
    test('should return view big', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
    });
});
