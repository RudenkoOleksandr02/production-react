import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouteScrollSchema } from '../types/routeScrollSchema';

const initialState: RouteScrollSchema = {
    scrollMap: {},
};

export const routeScrollSlice = createSlice({
    name: 'routeScroll',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scrollMap[payload.path] = payload.position;
        },
    },
});

export const {
    actions: routeScrollActions,
    reducer: routeScrollReducer,
} = routeScrollSlice;
