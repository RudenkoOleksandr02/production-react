import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Svg from './profile-20-20.svg';

import { Icon } from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg,
};

export const Inverted = Template.bind({});
Inverted.args = {
    Svg,
    inverted: true,
};

export const Dark = Template.bind({});
Dark.args = {
    Svg,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkInverted = Template.bind({});
DarkInverted.args = {
    Svg,
    inverted: true,
};
DarkInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    Svg,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeInverted = Template.bind({});
OrangeInverted.args = {
    Svg,
    inverted: true,
};
OrangeInverted.decorators = [ThemeDecorator(Theme.ORANGE)];
