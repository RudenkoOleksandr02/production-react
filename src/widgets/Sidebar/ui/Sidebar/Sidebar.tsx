import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarDeprecated } from './SidebarDeprecated/SidebarDeprecated';
import { SidebarRedesigned } from './SidebarRedesigned/SidebarRedesigned';
import { SidebarItem } from '../SidebarItem/SidebarItem';

export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prev) => !prev);

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <SidebarRedesigned
                    collapsed={collapsed}
                    itemsList={itemsList}
                    onToggle={onToggle}
                />
            }
            off={
                <SidebarDeprecated
                    collapsed={collapsed}
                    itemsList={itemsList}
                    onToggle={onToggle}
                />
            }
        />
    );
});
