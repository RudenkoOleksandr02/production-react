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
    decorators: [NewDesignDecorator],
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
