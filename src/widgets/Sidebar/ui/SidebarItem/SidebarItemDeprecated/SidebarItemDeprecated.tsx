import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../../model/types/sidebar';
import cls from './SidebarItemDeprecated.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemDeprecated = memo(
    ({ item, collapsed }: SidebarItemProps) => {
        const { t } = useTranslation();

        return (
            <AppLink
                theme={AppLinkTheme.INVERTED}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    },
);
