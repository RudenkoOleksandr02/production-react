import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from '../Text/Text';

import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text title="text" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="text" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children: <Text title="text" text="text text" />,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
