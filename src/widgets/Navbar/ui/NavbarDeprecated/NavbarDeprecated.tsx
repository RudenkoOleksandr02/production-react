import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarDeprecated.module.scss';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { User } from '@/entities/User';

interface NavbarDeprecatedProps {
    className?: string;
    authData?: User;
    onShowModal: VoidFunction;
    onCloseModal: VoidFunction;
    isModalOpen: boolean;
}

export const NavbarDeprecated = memo((props: NavbarDeprecatedProps) => {
    const { className, authData, onShowModal, onCloseModal, isModalOpen } =
        props;
    const { t } = useTranslation();

    if (authData) {
        return (
            <header
                className={classNames(cls.NavbarDeprecated, {}, [className])}
            >
                <Text
                    className={cls.appName}
                    title={t('Developer APP')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.createLink}
                >
                    {t('Create article')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.NavbarDeprecated, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isModalOpen && (
                <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
            )}
        </header>
    );
});
