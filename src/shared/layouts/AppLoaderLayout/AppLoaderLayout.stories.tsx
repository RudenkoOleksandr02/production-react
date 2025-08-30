import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLoaderLayout } from './AppLoaderLayout';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/layouts/AppLoaderLayout',
    component: AppLoaderLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = () => (
    <AppLoaderLayout />
);

export const Primary = Template.bind({});
Primary.args = {};
