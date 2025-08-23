import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/layouts/StickyContentLayout',
    component: StickyContentLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
);

const content = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100vh',
            fontSize: '20px',
        }}
    >
        CONTENT
    </div>
);

const left = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100vh',
            fontSize: '20px',
        }}
    >
        LEFT
    </div>
);

const right = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100vh',
            fontSize: '20px',
        }}
    >
        RIGHT
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    content,
    right,
    left,
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
    content,
};

export const WithRight = Template.bind({});
WithRight.args = {
    content,
    right,
};

export const WithLeft = Template.bind({});
WithLeft.args = {
    content,
    left,
};
