import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginFormDeprecated.module.scss';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginFormCommonProps } from '../LoginForm/LoginForm';

export const LoginFormDeprecated = memo((props: LoginFormCommonProps) => {
    const {
        className,
        onLoginClick,
        isLoading,
        error,
        onChangePassword,
        onChangeUsername,
        username,
        password,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && (
                <Text
                    text={t('You have entered an incorrect login or password')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
