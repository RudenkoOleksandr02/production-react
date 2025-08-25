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
