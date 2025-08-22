import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

/**
 * Deprecated, please use new components from redesigned
 * @deprecated
 */
export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger} as="div">
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, [
                    mapDirectionClass[direction],
                ])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
