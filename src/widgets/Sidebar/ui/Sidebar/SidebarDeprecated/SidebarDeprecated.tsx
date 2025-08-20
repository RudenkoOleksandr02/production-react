import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarDeprecated.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarDeprecatedProps {
    className?: string;
    collapsed: boolean;
    itemsList: ReactNode[];
    onToggle: VoidFunction;
}

export const SidebarDeprecated = memo((props: SidebarDeprecatedProps) => {
    const { className, onToggle, itemsList, collapsed } = props;

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
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
