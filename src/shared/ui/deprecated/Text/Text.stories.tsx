import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/deprecated/Text',
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
