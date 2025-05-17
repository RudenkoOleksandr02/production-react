import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        const nextLang = i18n.language === 'en' ? 'ua'
            : i18n.language === 'ua' ? 'ru' : 'en';

        await i18n.changeLanguage(nextLang);
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};
