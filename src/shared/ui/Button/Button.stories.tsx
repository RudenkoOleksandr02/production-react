import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE_RED,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineOrange = Template.bind({});
OutlineOrange.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
