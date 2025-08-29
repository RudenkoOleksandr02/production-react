import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainLayout } from './MainLayout';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/layouts/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

const header = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100px',
            fontSize: '20px',
        }}
    >
        HEADER
    </div>
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

const sidebar = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100vh',
            fontSize: '20px',
        }}
    >
        SIDEBAR
    </div>
);

const toolbar = (
    <div
        style={{
            background: 'red',
            border: '2px solid green',
            height: '100px',
            fontSize: '20px',
        }}
    >
        TOOLBAR
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    header,
    content,
    sidebar,
};

export const WithToolbar = Template.bind({});
WithToolbar.args = {
    header,
    content,
    sidebar,
    toolbar,
};
