import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

    decorators: [NewDesignDecorator],
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
