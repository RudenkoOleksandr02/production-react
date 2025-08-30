import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

const withoutRateArgs = {
    title: 'Please rate',
    hasFeedback: true,
    feedbackTitle: 'Please rate',
};

export const WithoutRate = Template.bind({});
WithoutRate.args = withoutRateArgs;

export const WithoutRateRedesigned = Template.bind({});
WithoutRateRedesigned.args = withoutRateArgs;
WithoutRateRedesigned.decorators = [NewDesignDecorator];

export const WithRate = Template.bind({});
WithRate.args = {
    rate: 4,
};

export const WithRateRedesigned = Template.bind({});
WithRateRedesigned.args = {
    rate: 4,
};
WithRateRedesigned.decorators = [NewDesignDecorator];
