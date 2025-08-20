import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/deprecated/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
};
