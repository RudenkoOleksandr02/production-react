import { AddCommentFormSchema } from '../types/addCommentFormSchema';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
        };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('some text'))).toEqual({
            text: 'some text',
        });
    });
});
