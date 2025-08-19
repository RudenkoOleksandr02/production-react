import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarDeprecated } from '../SidebarDeprecated/SidebarDeprecated';
import { SidebarRedesigned } from '../SidebarRedesigned/SidebarRedesigned';

export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <SidebarRedesigned
                    collapsed={collapsed}
                    sidebarItemsList={sidebarItemsList}
                    onToggle={onToggle}
                />
            }
            off={
                <SidebarDeprecated
                    collapsed={collapsed}
                    sidebarItemsList={sidebarItemsList}
                    onToggle={onToggle}
                />
            }
        />
    );
});
