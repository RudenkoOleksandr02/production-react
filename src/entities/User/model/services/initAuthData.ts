import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI;
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        try {
            if (!userId) {
                throw new Error();
            }

            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            if (!response) {
                throw new Error();
            }

            return response;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    },
);
