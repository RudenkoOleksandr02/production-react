import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        let nextLang: string;
        switch (i18n.language) {
            case 'en':
                nextLang = 'ua';
                break;
            case 'ua':
                nextLang = 'ru';
                break;
            default:
                nextLang = 'en';
        }

        await i18n.changeLanguage(nextLang);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggle}>
                    {short ? t('Short language') : t('Language')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {short ? t('Short language') : t('Language')}
                </ButtonDeprecated>
            }
        />
    );
});
