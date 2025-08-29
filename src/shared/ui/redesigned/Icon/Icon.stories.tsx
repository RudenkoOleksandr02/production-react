import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Svg from './article.svg';

import { Icon } from './Icon';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg,
};
