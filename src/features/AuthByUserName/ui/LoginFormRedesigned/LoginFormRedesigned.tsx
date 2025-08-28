import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginFormRedesigned.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { LoginFormCommonProps } from '../LoginForm/LoginForm';
import { VStack } from '@/shared/ui/redesigned/Stack';

export const LoginFormRedesigned = memo((props: LoginFormCommonProps) => {
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
            <VStack gap="24">
                <Text title={t('Authorization form')} />
                {error && (
                    <Text
                        text={t(
                            'You have entered an incorrect login or password',
                        )}
                        variant="error"
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
                    variant="outline"
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </VStack>
        </div>
    );
});
