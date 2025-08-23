import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelectorDeprecated.module.scss';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { ViewType } from '../ArticleViewSelector';

interface ArticleViewSelectorDeprecatedProps {
    className?: string;
    viewTypes: ViewType[];
    onClick: (newView: ArticleView) => () => void;
    view?: ArticleView;
}

export const ArticleViewSelectorDeprecated = memo(
    (props: ArticleViewSelectorDeprecatedProps) => {
        const { className, viewTypes, onClick, view } = props;

        return (
            <div
                className={classNames(cls.ArticleViewSelectorDeprecated, {}, [
                    className,
                ])}
            >
                {viewTypes.map((viewType) => (
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                        key={viewType.view}
                    >
                        <IconDeprecated
                            width={24}
                            height={24}
                            Svg={viewType.Icon}
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    </ButtonDeprecated>
                ))}
            </div>
        );
    },
);
