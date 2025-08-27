import { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { RatingCardDeprecated } from '../RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from '../RatingCardRedesigned/RatingCardRedesigned';

interface RatingCardProps {
    className?: string;
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export interface RatingCardCommonProps {
    title?: string;
    feedbackTitle?: string;
    feedback: string;
    setFeedback: (feedback: string) => void;
    starsCount: number;
    onSelectStars: (starsCount: number) => void;
    isModalOpen: boolean;
    cancelHandler: VoidFunction;
    acceptHandler: VoidFunction;
    className?: string;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        hasFeedback,
        feedbackTitle,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);

            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const commonProps: RatingCardCommonProps = {
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
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RatingCardRedesigned {...commonProps} />}
            off={<RatingCardDeprecated {...commonProps} />}
        />
    );
});
