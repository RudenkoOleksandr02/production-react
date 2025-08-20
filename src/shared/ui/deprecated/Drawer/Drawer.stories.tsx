import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Card, CardTheme } from '../Card/Card';
import { Text } from '../Text/Text';

import { Drawer } from './Drawer';

export default {
    title: 'shared/deprecated/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <AnimationProvider>
                <Story />
            </AnimationProvider>
        ),
    ],
} as ComponentMeta<typeof Drawer>;

const children = (
    <Card theme={CardTheme.OUTLINED} style={{ width: '100%' }}>
        <Text title="title 1" text="text 1" />
        <Text title="title 2" text="text 2" />
        <Text title="title 3" text="text 3" />
    </Card>
);

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children,
    isOpen: true,
};
