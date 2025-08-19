import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { NavbarRedesigned } from '../NavbarRedesigned/NavbarRedesigned';
import { NavbarDeprecated } from '../NavbarDeprecated/NavbarDeprecated';

export const Navbar = memo(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    const onShowModal = () => {
        setIsModalOpen(true);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <NavbarRedesigned
                    authData={authData}
                    onShowModal={onShowModal}
                    onCloseModal={onCloseModal}
                    isModalOpen={isModalOpen}
                />
            }
            off={
                <NavbarDeprecated
                    authData={authData}
                    onShowModal={onShowModal}
                    onCloseModal={onCloseModal}
                    isModalOpen={isModalOpen}
                />
            }
        />
    );
});
