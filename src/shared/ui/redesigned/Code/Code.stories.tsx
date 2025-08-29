import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Code>;

const text =
    "import React from 'react';\n" +
    "import { ComponentStory, ComponentMeta } from '@storybook/react';\n" +
    '\n' +
    "import { Code } from './Code';\n" +
    '\n' +
    'export default {\n' +
    "    title: 'shared/Code',\n" +
    '    component: Code,\n' +
    '    argTypes: {\n' +
    "        backgroundColor: { control: 'color' },\n" +
    '    },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'consts Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;';

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text,
};
