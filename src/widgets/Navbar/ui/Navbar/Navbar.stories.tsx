import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Notification } from '@/entities/Notification';
import { Navbar } from './Navbar';
import img from './storybook.png';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

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

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({}),
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({}),
    NewDesignDecorator,
];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
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

export const AuthNavbarRedesigned = Template.bind({});
AuthNavbarRedesigned.args = {};
AuthNavbarRedesigned.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({
        user: { authData: { avatar: img } },
    }),
    NewDesignDecorator,
];
AuthNavbarRedesigned.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: list,
        },
    ],
};
