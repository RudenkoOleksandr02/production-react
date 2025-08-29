import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => (
    <LangSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
