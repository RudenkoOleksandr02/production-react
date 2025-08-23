import { memo, SVGProps, VFC } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export interface ViewType {
    view: ArticleView;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
    {
        view: ArticleView.SMALL,
        Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ArticleViewSelectorRedesigned
                    view={view}
                    viewTypes={viewTypes}
                    onClick={onClick}
                />
            }
            off={
                <ArticleViewSelectorDeprecated
                    view={view}
                    viewTypes={viewTypes}
                    onClick={onClick}
                />
            }
        />
    );
});
