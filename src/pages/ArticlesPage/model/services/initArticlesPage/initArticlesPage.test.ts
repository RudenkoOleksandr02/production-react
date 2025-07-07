import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
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
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 1 });
    });
    test('fetch articles list not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        await thunk.callThunk();

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
