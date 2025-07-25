import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Enter a value',
    options: [
        { value: '1', content: 'first option' },
        { value: '2', content: 'second option' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Enter a value',
    options: [
        { value: '1', content: 'first option' },
        { value: '2', content: 'second option' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    label: 'Enter a value',
    options: [
        { value: '1', content: 'first option' },
        { value: '2', content: 'second option' },
    ],
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
