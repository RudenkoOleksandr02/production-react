import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta fugiat modi non nostrum quae quidem quo sapiente sit ut! Blanditiis ea et expedita fugiat impedit repudiandae similique! Cupiditate eligendi est id ipsam molestias nesciunt, officia quibusdam repellendus similique! Adipisci amet aspernatur, culpa eum fugit itaque neque quae quis velit voluptas? Dolor doloribus eos error in ipsa itaque maiores, minima molestias nihil numquam quibusdam quis suscipit voluptates. Alias amet atque corporis cupiditate dignissimos dolor enim eum facilis hic, incidunt iste minima, molestias natus, necessitatibus nihil provident vitae. A, animi assumenda, corporis cupiditate distinctio facilis, incidunt ipsa minus molestiae nulla velit.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta fugiat modi non nostrum quae quidem quo sapiente sit ut! Blanditiis ea et expedita fugiat impedit repudiandae similique! Cupiditate eligendi est id ipsam molestias nesciunt, officia quibusdam repellendus similique! Adipisci amet aspernatur, culpa eum fugit itaque neque quae quis velit voluptas? Dolor doloribus eos error in ipsa itaque maiores, minima molestias nihil numquam quibusdam quis suscipit voluptates. Alias amet atque corporis cupiditate dignissimos dolor enim eum facilis hic, incidunt iste minima, molestias natus, necessitatibus nihil provident vitae. A, animi assumenda, corporis cupiditate distinctio facilis, incidunt ipsa minus molestiae nulla velit.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
