import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Svg from './profile-20-20.svg';

import { Icon } from './Icon';

export default {
    title: 'shared/deprecated/Icon',
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
