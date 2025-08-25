import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
    <ArticlesFilters {...args} />
);

const sort: ArticleSortField = ArticleSortField.VIEWS;

const order = 'asc';
const type: ArticleType = ArticleType.ALL;

export const Primary = Template.bind({});
Primary.args = {
    sort,
    order,
    type,
};
