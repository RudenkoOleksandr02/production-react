import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarRedesigned.module.scss';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { User } from '@/entities/User';

interface NavbarRedesignedProps {
    className?: string;
    authData?: User;
    onShowModal: VoidFunction;
    onCloseModal: VoidFunction;
    isModalOpen: boolean;
}

export const NavbarRedesigned = memo((props: NavbarRedesignedProps) => {
    const { className, authData, onShowModal, onCloseModal, isModalOpen } =
        props;
    const { t } = useTranslation();

    if (authData) {
        return (
            <header
                className={classNames(cls.NavbarRedesigned, {}, [className])}
            >
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
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
