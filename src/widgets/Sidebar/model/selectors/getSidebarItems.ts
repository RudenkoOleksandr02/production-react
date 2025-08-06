import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    gerRouteAbout, gerRouteArticles, gerRouteMain, gerRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: gerRouteMain(),
                text: 'Main',
                Icon: MainIcon,
            },
            {
                path: gerRouteAbout(),
                text: 'About',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            SidebarItemsList.push(
                {
                    path: gerRouteProfile(userData.id),
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: gerRouteArticles(),
                    text: 'Articles',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return SidebarItemsList;
    },
);
