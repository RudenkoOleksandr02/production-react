import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Bottom = Template.bind({});
Bottom.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    onChange: action('onChange'),
    value: 'value 1',
    label: 'select option',
};

export const Top = Template.bind({});
Top.args = {
    items: [
        { value: 'value 1', content: 'value 1' },
        { value: 'value 2', content: 'disabled', disabled: true },
        { value: 'value 3', content: 'value 3' },
    ],
    onChange: action('onChange'),
    value: 'value 1',
    direction: 'top',
    label: 'select option',
};
