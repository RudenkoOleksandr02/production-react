import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarRedesigned.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarRedesignedProps {
    className?: string;
    collapsed: boolean;
    sidebarItemsList: SidebarItemType[];
    onToggle: VoidFunction;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className, sidebarItemsList, onToggle, collapsed } = props;

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo className={cls.appLogo} />
        </aside>
    );
});
