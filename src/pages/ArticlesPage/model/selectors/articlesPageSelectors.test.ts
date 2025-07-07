import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited,
    getArticlesPageIsLoading, getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageView,
} from './articlesPageSelectors';

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
    test('should return page num', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 3,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toEqual(3);
    });
    test('should return has more', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
    });
    test('should return limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 4,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(4);
    });
    test('should return inited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
        expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
        expect(getArticlesPageInited(state as StateSchema)).toEqual(false);
    });
});
