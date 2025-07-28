import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });
        const searchParams = new URLSearchParams();
        searchParams.set('order', 'asc');
        searchParams.set('search', 'text');

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(6);
        expect(fetchArticlesList).toBeCalledWith({});
    });
    test('fetch articles list not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
