import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/profileRaitingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({ userId: authData?.id ?? '', profileId: profileId ?? '' });
    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((rate: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: authData?.id ?? '',
                profileId: profileId ?? '',
                rate,
                feedback,
            });
        } catch (e) {
            console.error(e);
        }
    }, [authData?.id, profileId, rateProfileMutation]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (profileId === authData?.id) {
        return null;
    }

    if (isLoading) {
        return <Skeleton height={120} width="100%" />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title={t('Rate the profile')}
            rate={rating?.rate}
            hasFeedback
            feedbackTitle={t('Leave your feedback about the profile')}
        />
    );
});

export default ProfileRating;
