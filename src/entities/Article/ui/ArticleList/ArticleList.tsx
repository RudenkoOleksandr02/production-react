import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, WindowScroller, ListRowProps } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line
        <ArticleListItemSkeleton className={cls.card} view={view} key={index}/>
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation();
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>{items}</div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized ? (
                        <List
                            height={height ?? 700}
                            rowCount={rowCount}
                            rowHeight={isBig ? 560 : 330}
                            rowRenderer={rowRenderer}
                            width={width ? width - 80 : 700}
                            autoHeight
                            onScroll={onChildScroll}
                            scrollTop={scrollTop}
                        />
                    ) : (
                        articles.map((item) => (
                            <ArticleListItem
                                className={cls.card}
                                article={item}
                                view={view}
                                target={target}
                                key={item.id}
                            />
                        ))
                    )}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
