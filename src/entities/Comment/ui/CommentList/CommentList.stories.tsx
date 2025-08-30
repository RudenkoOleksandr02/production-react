import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const primaryArgs = {
    comments: [
        {
            id: '1',
            text: 'hello world 1',
            user: { id: '1', username: 'Sasha' },
        },
        {
            id: '2',
            text: 'hello world 2',
            user: { id: '2', username: 'Petya' },
        },
        {
            id: '3',
            text: 'hello world 3',
            user: { id: '2', username: 'Petya' },
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    comments: [],
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];
