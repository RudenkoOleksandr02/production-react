import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    width: '100%',
    height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    width: '100%',
    height: 200,
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
