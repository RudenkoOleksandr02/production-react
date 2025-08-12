import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

describe('articleDetailsCommentsSlice.test', () => {
    test('test fetch comments by article id pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({ isLoading: true, error: undefined });
    });
    test('test fetch comments by article id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            entities: {},
            ids: [],
        };
        const comments: Comment[] = [
            {
                id: '1',
                text: 'some comment',
                user: { id: '1', username: 'user' },
            },
            {
                id: '2',
                text: 'some comment',
                user: { id: '1', username: 'user' },
            },
            {
                id: '3',
                text: 'some comment',
                user: { id: '1', username: 'user' },
            },
        ];

        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.fulfilled(comments, '1', ''),
            ),
        ).toEqual({
            isLoading: false,
            entities: {
                1: comments[0],
                2: comments[1],
                3: comments[2],
            },
            ids: ['1', '2', '3'],
        });
    });
});
