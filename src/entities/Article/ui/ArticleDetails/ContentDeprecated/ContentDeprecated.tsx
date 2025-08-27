import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { renderBlock } from '../renderBlock';
import { Article } from '../../../model/types/article';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';

interface ContentDeprecatedProps {
    isLoading: boolean;
    error?: string;
    article?: Article;
}

export const ContentDeprecated = memo((props: ContentDeprecatedProps) => {
    const { isLoading, error, article } = props;
    const { t } = useTranslation('article-details');

    let content;

    if (isLoading) {
        content = (
            <>
                <HStack max justify="center">
                    <Skeleton width={200} height={200} borderRadius="50%" />
                </HStack>
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('There was an error loading the article')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <HStack max justify="center">
                    <Avatar size={200} src={article?.img} />
                </HStack>
                <VStack gap="4" data-testid="ArticleDetails.Info">
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return content;
});
