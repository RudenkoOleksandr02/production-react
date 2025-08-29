import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLogo } from './AppLogo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const Small = Template.bind({});
Small.args = {};

export const Big = Template.bind({});
Big.args = {
    size: 100,
};
