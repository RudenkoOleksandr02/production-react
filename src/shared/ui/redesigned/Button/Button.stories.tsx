import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import SvgIcon from './arrow-bottom.svg';
import { Icon } from '../Icon';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const WithAddonLeft = Template.bind({});
WithAddonLeft.args = {
    children: 'Text',
    variant: 'outline',
    addonLeft: <Icon Svg={SvgIcon} />,
};

export const WithAddonRight = Template.bind({});
WithAddonRight.args = {
    children: 'Text',
    variant: 'outline',
    addonRight: <Icon Svg={SvgIcon} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outline',
    disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: 'Text',
    variant: 'outline',
    fullWidth: true,
};
