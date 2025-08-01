import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const ErrorOrange = Template.bind({});
ErrorOrange.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    theme: TextTheme.ERROR,
};
ErrorOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OnlyTitleOrange = Template.bind({});
OnlyTitleOrange.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
OnlyTitleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OnlyTextOrange = Template.bind({});
OnlyTextOrange.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};
OnlyTextOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: TextSize.S,
};
