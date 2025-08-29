import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageHasBeenOpen } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageHasBeenOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageHasBeenOpen: true }));
        }
    }, [dispatch, isArticlesPageHasBeenOpen]);

    const onClose = () => setIsOpen(false);

    const text = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Text
                    title={t('Welcome to the articles page')}
                    text={t(
                        'Here you can search and view articles on various topics',
                    )}
                />
            }
            off={
                <TextDeprecated
                    title={t('Welcome to the articles page')}
                    text={t(
                        'Here you can search and view articles on various topics',
                    )}
                />
            }
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
