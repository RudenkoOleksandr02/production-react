import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: 'value',
    placeholder: 'some placeholder',
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'value',
    placeholder: 'some placeholder',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
