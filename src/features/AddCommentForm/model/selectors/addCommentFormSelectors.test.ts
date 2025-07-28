import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return some comment', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'some comment',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('some comment');
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
