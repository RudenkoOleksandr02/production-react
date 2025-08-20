import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};
