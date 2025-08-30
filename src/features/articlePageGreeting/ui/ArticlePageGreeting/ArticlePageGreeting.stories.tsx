import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    jsonSettings: {
                        isArticlesPageHasBeenOpen: false,
                    },
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticlePageGreeting>;

const Template: ComponentStory<typeof ArticlePageGreeting> = () => (
    <ArticlePageGreeting />
);

const parameters = {
    mockData: [
        {
            url: `${__API__}/users/1`,
            method: 'PATCH',
            status: 200,
            response: {
                id: '1',
                username: 'Test user',
                jsonSettings: {
                    isArticlesPageHasBeenOpen: true,
                },
            },
        },
    ],
};

export const Primary = Template.bind({});
Primary.parameters = parameters;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.parameters = parameters;
PrimaryRedesigned.decorators = [NewDesignDecorator];
