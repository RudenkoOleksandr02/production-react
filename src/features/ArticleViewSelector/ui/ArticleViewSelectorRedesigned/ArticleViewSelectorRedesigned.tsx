import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelectorRedesigned.module.scss';
import { ArticleView } from '@/entities/Article';
import { ViewType } from '../ArticleViewSelector';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorRedesignedProps {
    className?: string;
    viewTypes: ViewType[];
    onClick: (newView: ArticleView) => () => void;
    view?: ArticleView;
}

export const ArticleViewSelectorRedesigned = memo(
    (props: ArticleViewSelectorRedesignedProps) => {
        const { className, viewTypes, onClick, view } = props;

        return (
            <Card
                className={classNames(cls.ArticleViewSelectorDeprecated, {}, [
                    className,
                ])}
                border="round"
            >
                <HStack gap="8">
                    {viewTypes.map((viewType) => (
                        <Icon
                            clickable
                            onClick={onClick(viewType.view)}
                            Svg={viewType.Icon}
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    ))}
                </HStack>
            </Card>
        );
    },
);
