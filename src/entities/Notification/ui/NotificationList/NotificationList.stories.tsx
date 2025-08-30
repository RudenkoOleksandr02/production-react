import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

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

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const primaryParameters = {
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
Primary.parameters = primaryParameters;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.parameters = primaryParameters;
PrimaryRedesigned.decorators = [NewDesignDecorator];
