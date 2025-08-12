import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, CardTheme } from '../../../Card/Card';
import { Text } from '../../../Text/Text';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
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
} as ComponentMeta<typeof Popover>;

const children = (
    <Card theme={CardTheme.OUTLINED} style={{ width: '200px' }}>
        <Text title="title 1" text="text 1" />
        <Text title="title 2" text="text 2" />
        <Text title="title 3" text="text 3" />
    </Card>
);

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    trigger: <Button>Click</Button>,
    children,
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    trigger: <Button>Click</Button>,
    children,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    trigger: <Button>Click</Button>,
    children,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    trigger: <Button>Click</Button>,
    children,
};
