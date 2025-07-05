import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                page: 2,
                limit: 5,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        // 1 - pending, 2 - fulfilled, 3-4 - inside thunk
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                page: 2,
                limit: 5,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
