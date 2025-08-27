import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { RatingCardCommonProps } from '../RatingCard/RatingCard';

export const RatingCardRedesigned = memo((props: RatingCardCommonProps) => {
    const {
        title,
        feedbackTitle,
        feedback,
        setFeedback,
        starsCount,
        onSelectStars,
        isModalOpen,
        cancelHandler,
        acceptHandler,
        className,
    } = props;
    const { t } = useTranslation();

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                placeholder={t('Your review')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card
            className={className}
            max
            data-testid="RatingCard"
            padding="24"
            border="round"
        >
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('Thanks for the rate') : title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStarts={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack gap="16" justify="end" max>
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandler}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandler}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32" max>
                        {modalContent}
                        <Button onClick={acceptHandler} size="l" fullWidth>
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
