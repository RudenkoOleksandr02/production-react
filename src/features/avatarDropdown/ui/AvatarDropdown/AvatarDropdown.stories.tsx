import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/User';
import { AvatarDropdown } from './AvatarDropdown';
import img from './storybook.png';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const User = Template.bind({});
User.args = {};
User.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({
        user: { authData: { roles: [UserRole.USER], avatar: img } },
    }),
];

export const UserRedesigned = Template.bind({});
UserRedesigned.args = {};
UserRedesigned.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({
        user: { authData: { roles: [UserRole.USER], avatar: img } },
    }),
    NewDesignDecorator,
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({
        user: { authData: { roles: [UserRole.ADMIN], avatar: img } },
    }),
];

export const AdminRedesigned = Template.bind({});
AdminRedesigned.args = {};
AdminRedesigned.decorators = [
    (Story) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
    StoreDecorator({
        user: { authData: { roles: [UserRole.ADMIN], avatar: img } },
    }),
    NewDesignDecorator,
];
