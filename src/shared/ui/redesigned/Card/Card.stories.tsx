import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';

import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text title="text" text="text text" />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text title="text" text="text text" />,
    variant: 'outlined',
};

export const Light = Template.bind({});
Light.args = {
    children: <Text title="text" text="text text" />,
    variant: 'light',
};

export const Round = Template.bind({});
Round.args = {
    children: <Text title="text" text="text text" />,
    border: 'round',
};

export const Padding0 = Template.bind({});
Padding0.args = {
    children: <Text title="text" text="text text" />,
    padding: '0',
};

export const Padding8 = Template.bind({});
Padding8.args = {
    children: <Text title="text" text="text text" />,
    padding: '8',
};

export const Padding16 = Template.bind({});
Padding16.args = {
    children: <Text title="text" text="text text" />,
    padding: '16',
};

export const Padding24 = Template.bind({});
Padding24.args = {
    children: <Text title="text" text="text text" />,
    padding: '24',
};
