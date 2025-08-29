import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.png';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
};
