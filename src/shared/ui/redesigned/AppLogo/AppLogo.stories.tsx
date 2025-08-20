import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLogo } from './AppLogo';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const Small = Template.bind({});
Small.args = {};

export const Big = Template.bind({});
Big.args = {
    size: 100,
};
