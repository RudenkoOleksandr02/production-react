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

export const SizeS = Template.bind({});
SizeS.args = {
    value: 'value',
    placeholder: 'some placeholder',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    value: 'value',
    placeholder: 'some placeholder',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    value: 'value',
    placeholder: 'some placeholder',
    size: 'l',
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
