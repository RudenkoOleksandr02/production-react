import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Notification } from '@/entities/Notification';
import { Navbar } from './Navbar';
import img from './storybook.png';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

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

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: { avatar: img } },
    }),
];
AuthNavbar.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: list,
        },
    ],
};
