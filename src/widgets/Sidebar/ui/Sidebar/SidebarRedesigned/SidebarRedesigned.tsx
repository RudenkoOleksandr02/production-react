import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarRedesigned.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { VStack } from '@/shared/ui/deprecated/Stack';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarRedesignedProps {
    className?: string;
    collapsed: boolean;
    itemsList: ReactNode[];
    onToggle: VoidFunction;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className, itemsList, onToggle, collapsed } = props;

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
            <VStack role="navigation" className={cls.items} gap="8">
                {itemsList}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
