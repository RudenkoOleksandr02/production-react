import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    size: 50,
};

export const SelectedStars = Template.bind({});
SelectedStars.args = {
    size: 50,
    selectedStarts: 3,
};
