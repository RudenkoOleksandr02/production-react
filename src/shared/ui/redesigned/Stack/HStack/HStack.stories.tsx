import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HStack } from './HStack';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/Flex/HStack',
    component: HStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />;

const elem = (
    <div
        style={{
            width: 60,
            height: 60,
            backgroundColor: 'red',
            border: '1px solid green',
        }}
    />
);

const children = <>{Array.from({ length: 4 }).map(() => elem)}</>;

export const Gap0 = Template.bind({});
Gap0.args = {
    children,
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children,
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children,
};

export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
    children,
};

export const Gap24 = Template.bind({});
Gap24.args = {
    gap: '24',
    children,
};

export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
    children,
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
    gap: '8',
    justify: 'start',
    children,
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    gap: '8',
    justify: 'end',
    children,
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    gap: '8',
    justify: 'center',
    children,
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
    gap: '8',
    justify: 'between',
    children,
};

export const AlignStart = Template.bind({});
AlignStart.args = {
    gap: '8',
    align: 'start',
    children,
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
    gap: '8',
    align: 'end',
    children,
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    gap: '8',
    align: 'center',
    children,
};

export const Wrap = Template.bind({});
Wrap.args = {
    gap: '8',
    wrap: 'wrap',
    children,
};

export const Nowrap = Template.bind({});
Nowrap.args = {
    gap: '8',
    wrap: 'nowrap',
    children,
};

export const Max = Template.bind({});
Max.args = {
    gap: '8',
    max: true,
    children,
};
