import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { UserRole } from 'entities/User';
import { AvatarDropdown } from './AvatarDropdown';
import img from './storybook.png';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Story /></div>,
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorator({ user: { authData: { roles: [UserRole.USER], avatar: img } } })];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [StoreDecorator({ user: { authData: { roles: [UserRole.ADMIN], avatar: img } } })];
