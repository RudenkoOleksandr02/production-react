import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';
import SvgIcon from './search.svg';
import { Icon } from '../Icon';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
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

export const Readonly = Template.bind({});
Readonly.args = {
    value: 'value',
    placeholder: 'some placeholder',
    readonly: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    value: 'value',
    placeholder: 'some placeholder',
    label: 'label',
};
