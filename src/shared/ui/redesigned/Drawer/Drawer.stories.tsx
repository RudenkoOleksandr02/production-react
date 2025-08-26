import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

import { Drawer } from './Drawer';
import { Card } from '../Card';
import { Text } from '../Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Drawer',
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
        ThemeDecorator({ isRedesigned: true }),
    ],
} as ComponentMeta<typeof Drawer>;

const children = (
    <Card variant="outlined" style={{ width: '100%' }}>
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
