import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

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
