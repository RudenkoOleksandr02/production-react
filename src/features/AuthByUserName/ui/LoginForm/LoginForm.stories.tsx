import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'asd', password: '123' },
    }),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: 'asd', password: '123' },
    }),
    NewDesignDecorator,
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginForm: { username: 'asd', password: '123', error: 'ERROR' },
    }),
];

export const WithErrorRedesigned = Template.bind({});
WithErrorRedesigned.args = {};
WithErrorRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: 'asd', password: '123', error: 'ERROR' },
    }),
    NewDesignDecorator,
];
