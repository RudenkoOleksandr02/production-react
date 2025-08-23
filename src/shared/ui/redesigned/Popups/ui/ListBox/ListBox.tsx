import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string;
    readonly?: boolean;
    onChange: (value: T) => void;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                className={classNames(popupCls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                as="div"
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger} disabled={readonly}>
                    <Button variant="filled" disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [
                        mapDirectionClass[direction],
                        popupCls.menu,
                    ])}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
