import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];

    if (userData) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                authOnly: true,
            },
        );
    }

    return SidebarItemsList;
});
