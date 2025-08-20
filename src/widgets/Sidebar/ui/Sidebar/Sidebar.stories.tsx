import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
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
