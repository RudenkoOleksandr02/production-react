import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Card, CardTheme } from '../Card/Card';
import { Text } from '../Text/Text';

import { Drawer } from './Drawer';
import { Theme } from '@/shared/const/theme';

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

export const Dark = Template.bind({});
Dark.args = {
    children,
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children,
    isOpen: true,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
