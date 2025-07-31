import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({
        user: {
            authData: { id: '2' },
        },
    })],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const WithRate = Template.bind({});
WithRate.args = {
    profileId: '1',
};
WithRate.parameters = {
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

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    profileId: '1',
};
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=2&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
