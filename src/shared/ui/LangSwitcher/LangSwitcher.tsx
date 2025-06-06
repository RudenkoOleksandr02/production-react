import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        const nextLang = i18n.language === 'en' ? 'ua'
            : i18n.language === 'ua' ? 'ru' : 'en';

        await i18n.changeLanguage(nextLang);
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {short
                ? t('Short language')
                : t('Language')}
        </Button>
    );
};
