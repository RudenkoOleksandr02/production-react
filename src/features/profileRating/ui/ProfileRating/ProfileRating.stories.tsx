import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '2' },
            },
        }),
    ],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
);

const withRateParameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=2&profileId=1`,
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
    profileId: '1',
};
WithRate.parameters = withRateParameters;

export const WithRateRedesigned = Template.bind({});
WithRateRedesigned.args = {
    profileId: '1',
};
WithRateRedesigned.parameters = withRateParameters;
WithRateRedesigned.decorators = [NewDesignDecorator];

const withoutRateParameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=2&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    profileId: '1',
};
WithoutRate.parameters = withoutRateParameters;

export const WithoutRateRedesigned = Template.bind({});
WithoutRateRedesigned.args = {
    profileId: '1',
};
WithoutRateRedesigned.parameters = withoutRateParameters;
WithoutRateRedesigned.decorators = [NewDesignDecorator];
