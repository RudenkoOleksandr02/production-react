import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VStack } from './VStack';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Flex/VStack',
    component: VStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />;

export const Gap0 = Template.bind({});
Gap0.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap24 = Template.bind({});
Gap24.args = {
    gap: '24',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
    gap: '8',
    justify: 'start',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    gap: '8',
    justify: 'end',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    gap: '8',
    justify: 'center',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
    gap: '8',
    justify: 'between',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const AlignStart = Template.bind({});
AlignStart.args = {
    gap: '8',
    align: 'start',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
    gap: '8',
    align: 'end',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    gap: '8',
    align: 'center',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Wrap = Template.bind({});
Wrap.args = {
    gap: '8',
    wrap: 'wrap',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Nowrap = Template.bind({});
Nowrap.args = {
    gap: '8',
    wrap: 'nowrap',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Max = Template.bind({});
Max.args = {
    gap: '8',
    max: true,
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};
