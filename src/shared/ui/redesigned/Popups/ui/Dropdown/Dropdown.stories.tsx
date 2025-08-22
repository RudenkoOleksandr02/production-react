import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '200px' }}>
                <Story />
            </div>
        ),
        ThemeDecorator({ isRedesigned: true }),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { content: 'value 1' },
        { content: 'disabled', disabled: true },
        { content: 'value 3' },
    ],
    direction: 'top left',
    trigger: <Button>Open</Button>,
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { content: 'value 1' },
        { content: 'disabled', disabled: true },
        { content: 'value 3' },
    ],
    direction: 'top right',
    trigger: <Button>Open</Button>,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { content: 'value 1' },
        { content: 'disabled', disabled: true },
        { content: 'value 3' },
    ],
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { content: 'value 1' },
        { content: 'disabled', disabled: true },
        { content: 'value 3' },
    ],
    direction: 'bottom right',
    trigger: <Button>Open</Button>,
};
