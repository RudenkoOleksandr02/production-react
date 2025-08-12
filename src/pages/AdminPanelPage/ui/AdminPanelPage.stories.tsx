import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
    <AdminPanelPage />
);

export const Primary = Template.bind({});
Primary.args = {};
