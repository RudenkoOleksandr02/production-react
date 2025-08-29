import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line @sashar/fsd-paths/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

interface ThemeDecoratorProps {
    theme?: Theme;
}

export const ThemeDecorator =
    ({ theme }: ThemeDecoratorProps) =>
    (StoryComponent: Story) =>
        (
            <ThemeProvider initialTheme={theme ?? Theme.LIGHT}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
