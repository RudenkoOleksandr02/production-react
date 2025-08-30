import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
    NewDesignDecorator,
];

export const NotAuth = Template.bind({});
NotAuth.args = {};
NotAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];

export const NotAuthRedesigned = Template.bind({});
NotAuthRedesigned.args = {};
NotAuthRedesigned.decorators = [
    StoreDecorator({
        user: {},
    }),
    NewDesignDecorator,
];
