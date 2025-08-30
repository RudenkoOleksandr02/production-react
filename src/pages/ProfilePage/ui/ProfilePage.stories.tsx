import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.png';
import ProfilePage from './ProfilePage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    id: '1',
                    first: 'Sasha',
                    lastname: 'Rudenko',
                    username: 'admin',
                    age: 23,
                    country: Country.Ukraine,
                    currency: Currency.USD,
                    city: 'Obukhiv',
                    avatar,
                },
            },
        }),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=2&profileId=2`,
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

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = parameters;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.decorators = [NewDesignDecorator];
PrimaryRedesigned.parameters = parameters;
