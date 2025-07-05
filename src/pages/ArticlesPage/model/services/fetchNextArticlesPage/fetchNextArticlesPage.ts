import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchArticlesList({ page: page + 1 }));
            dispatch(articlesPageActions.setPage(page + 1));
        }
    },
);
