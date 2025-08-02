import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        articleDetailsPage: {
            comments: {
                entities: {
                    1: {
                        id: '1',
                        text: 'some comment',
                        user: { id: '1', username: 'admin' },
                    },
                    2: {
                        id: '2',
                        text: 'some comment 2',
                        user: { id: '1', username: 'admin' },
                    },
                },
                ids: ['1', '2'],
            },
        },
    })],
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
