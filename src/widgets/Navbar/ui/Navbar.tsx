import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = () => {
        setIsAuthModalOpen((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Login')}
            </Button>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            >
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem, consectetur corporis dolore enim, eos eveniet facilis inventore, ipsum laboriosam quae quasi voluptatibus? Incidunt nostrum officia sapiente sunt voluptate.')}
            </Modal>
        </div>
    );
};
