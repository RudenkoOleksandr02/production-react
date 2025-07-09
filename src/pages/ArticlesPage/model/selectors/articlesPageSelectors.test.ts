import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited,
    getArticlesPageIsLoading, getArticlesPageLimit,
    getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
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
    test('should return sort field created', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                sort: ArticleSortField.CREATED,
            },
        };
        expect(getArticlesPageSort(state as StateSchema)).toEqual(ArticleSortField.CREATED);
    });
    test('should return order asc', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                order: 'asc',
            },
        };
        expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc');
    });
    test('should return search text', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                search: 'text',
            },
        };
        expect(getArticlesPageSearch(state as StateSchema)).toEqual('text');
    });
    test('should return type IT', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                type: ArticleType.IT,
            },
        };
        expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.IT);
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
        expect(getArticlesPageSort(state as StateSchema)).toEqual(ArticleSortField.CREATED);
        expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc');
        expect(getArticlesPageSearch(state as StateSchema)).toEqual('');
        expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ALL);
    });
});
