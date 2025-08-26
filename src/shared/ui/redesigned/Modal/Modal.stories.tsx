import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from '../Text';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator({ isRedesigned: true })],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: (
        <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta fugiat modi non nostrum quae quidem quo sapiente sit ut! Blanditiis ea et expedita fugiat impedit repudiandae similique! Cupiditate eligendi est id ipsam molestias nesciunt, officia quibusdam repellendus similique! Adipisci amet aspernatur, culpa eum fugit itaque neque quae quis velit voluptas? Dolor doloribus eos error in ipsa itaque maiores, minima molestias nihil numquam quibusdam quis suscipit voluptates. Alias amet atque corporis cupiditate dignissimos dolor enim eum facilis hic, incidunt iste minima, molestias natus, necessitatibus nihil provident vitae. A, animi assumenda, corporis cupiditate distinctio facilis, incidunt ipsa minus molestiae nulla velit" />
    ),
};
