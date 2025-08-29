import { lazy, Suspense } from 'react';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ProfileRatingProps } from './ProfileRating';
import { ToggleFeatures } from '@/shared/lib/features';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense
            fallback={
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Skeleton height={140} width="100%" />}
                    off={<SkeletonDeprecated height={140} width="100%" />}
                />
            }
        >
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
