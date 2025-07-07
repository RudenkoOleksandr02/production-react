import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getRouteScroll = (state: StateSchema) => state.routeScroll.scrollMap;
export const getRouteScrollByPath = createSelector(
    getRouteScroll,
    (state: StateSchema, path: string) => path,
    (scrollMap, path) => scrollMap[path] || 0,
);
