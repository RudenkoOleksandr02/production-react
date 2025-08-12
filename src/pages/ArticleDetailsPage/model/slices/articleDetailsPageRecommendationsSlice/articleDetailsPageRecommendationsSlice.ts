import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchArticleRecommendations } from '../../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendations',
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, actions) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, actions.payload);
                },
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articleDetailsPageRecommendationsActions,
    reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;
