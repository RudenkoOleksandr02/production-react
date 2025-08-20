import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Svg from './article.svg';

import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg,
};
