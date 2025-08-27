import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));
export const ArticleRatingAsync = (props: ArticleRatingProps) => {
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
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
