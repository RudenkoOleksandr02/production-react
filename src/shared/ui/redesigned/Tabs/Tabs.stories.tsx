import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Row = Template.bind({});
Row.args = {
    tabs: [
        { value: 'tab 1', content: 'tab 1' },
        { value: 'tab 2', content: 'tab 2' },
        { value: 'tab 3', content: 'tab 3' },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

export const Column = Template.bind({});
Column.args = {
    tabs: [
        { value: 'tab 1', content: 'tab 1' },
        { value: 'tab 2', content: 'tab 2' },
        { value: 'tab 3', content: 'tab 3' },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
    direction: 'column',
};
