import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '200px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    value: 'value 1',
    direction: 'top left',
    label: 'select option',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    value: 'value 1',
    direction: 'top right',
    label: 'select option',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    value: 'value 1',
    direction: 'bottom left',
    label: 'select option',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    value: 'value 1',
    direction: 'bottom right',
    label: 'select option',
};
