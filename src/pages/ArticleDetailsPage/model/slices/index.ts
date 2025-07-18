import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import {
    articleDetailsCommentsReducer,
} from './articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
