import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    title: 'Please rate',
    hasFeedback: true,
    feedbackTitle: 'Please rate',
};

export const WithRate = Template.bind({});
WithRate.args = {
    rate: 4,
};
