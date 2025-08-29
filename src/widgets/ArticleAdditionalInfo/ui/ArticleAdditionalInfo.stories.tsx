import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    author: {
        avatar: 'https://scx2.b-cdn.net/gfx/news/hires/2018/hack.jpg',
        username: 'admin',
        id: '1',
    },
    views: 100,
    createdAt: '2019-09-09',
};
