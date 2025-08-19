import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarDeprecated.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarDeprecatedProps {
    className?: string;
    collapsed: boolean;
    sidebarItemsList: SidebarItemType[];
    onToggle: VoidFunction;
}

export const SidebarDeprecated = memo((props: SidebarDeprecatedProps) => {
    const { className, onToggle, sidebarItemsList, collapsed } = props;

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarDeprecated,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" className={cls.items} gap="8">
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
