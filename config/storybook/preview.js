import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { setFeatureFlags } from '@/shared/lib/features';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ff5a00' },
        ],
    },
};

export const decorators = [
    StyleDecorator,
    ThemeDecorator({ theme: Theme.LIGHT }),
    RouterDecorator,
    StoreDecorator({}),
    SuspenseDecorator,
    (Story) => {
        setFeatureFlags({ isAppRedesigned: true });
        return <Story />;
    },
];
