import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NotAuth = Template.bind({});
NotAuth.args = {};
NotAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
