import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { renderBlock } from '../renderBlock';
import { Article } from '../../../model/types/article';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import cls from './ContentRedesigned.module.scss';

interface ContentRedesignedProps {
    isLoading: boolean;
    error?: string;
    article?: Article;
}

export const ContentRedesigned = memo((props: ContentRedesignedProps) => {
    const { isLoading, error, article } = props;
    const { t } = useTranslation('article-details');

    let content;

    if (isLoading) {
        content = (
            <VStack max gap="16">
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={420} borderRadius="16px" />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                title={t('There was an error loading the article')}
                align="center"
            />
        );
    } else {
        content = (
            <>
                <Text title={article?.title} size="l" bold />
                <Text title={article?.subtitle} />
                <AppImage
                    fallback={
                        <Skeleton
                            width="100%"
                            height={420}
                            borderRadius="16px"
                        />
                    }
                    src={article?.img}
                    className={cls.image}
                />
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return content;
});
