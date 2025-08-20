import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../../model/types/sidebar';
import cls from './SidebarItemRedesigned.module.scss';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemRedesigned = memo(
    ({ item, collapsed }: SidebarItemProps) => {
        const { t } = useTranslation();

        return (
            <AppLink
                variant="primary"
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                activeClassName={cls.active}
            >
                <Icon Svg={item.Icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    },
);
