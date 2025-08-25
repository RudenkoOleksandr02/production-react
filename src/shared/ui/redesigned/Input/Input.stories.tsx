import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import SvgIcon from './search.svg';
import { Icon } from '../Icon';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'value',
    placeholder: 'some placeholder',
};

export const WithAddonLeft = Template.bind({});
WithAddonLeft.args = {
    value: 'value',
    placeholder: 'some placeholder',
    addonLeft: <Icon Svg={SvgIcon} />,
};

export const WithAddonRight = Template.bind({});
WithAddonRight.args = {
    value: 'value',
    placeholder: 'some placeholder',
    addonRight: <Icon Svg={SvgIcon} />,
};
