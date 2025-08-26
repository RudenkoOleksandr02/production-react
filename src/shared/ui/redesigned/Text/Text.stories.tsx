import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
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
    variant: 'error',
};

export const Accent = Template.bind({});
Accent.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    variant: 'accent',
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    align: 'left',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    align: 'center',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    align: 'right',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: 's',
};

export const Bold = Template.bind({});
Bold.args = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    bold: true,
};
