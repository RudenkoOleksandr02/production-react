import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotificationButton } from './NotificationButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationButton>;

const list: Notification[] = [
    {
        id: '1',
        title: 'Notification title 1',
        description: 'Notification description',
    },
    {
        id: '2',
        title: 'Notification title 2',
        description: 'Notification description',
    },
    {
        id: '3',
        title: 'Notification title 3',
        description: 'Notification description',
    },
];

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

const primaryArgs = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: list,
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = primaryArgs;
Primary.decorators = [
    (Store) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Store />
        </div>
    ),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.parameters = primaryArgs;
PrimaryRedesigned.decorators = [
    (Store) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Store />
        </div>
    ),
    NewDesignDecorator,
];
