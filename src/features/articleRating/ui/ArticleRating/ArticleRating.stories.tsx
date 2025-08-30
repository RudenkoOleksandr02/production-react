import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

const withRateParameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithRate = Template.bind({});
WithRate.args = {
    articleId: '1',
};
WithRate.parameters = withRateParameters;

export const WithRateRedesigned = Template.bind({});
WithRateRedesigned.args = {
    articleId: '1',
};
WithRateRedesigned.parameters = withRateParameters;
WithRateRedesigned.decorators = [NewDesignDecorator];

const withoutRateParameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.parameters = withoutRateParameters;

export const WithoutRateRedesigned = Template.bind({});
WithoutRateRedesigned.args = {
    articleId: '1',
};
WithoutRateRedesigned.parameters = withoutRateParameters;
WithoutRateRedesigned.decorators = [NewDesignDecorator];
