import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSetting';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { dispatch, rejectWithValue, getState } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    try {
        if (!userData) {
            throw new Error();
        }

        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            throw new Error();
        }

        return response.jsonSettings;
    } catch (e) {
        console.error(e);
        return rejectWithValue('error');
    }
});
