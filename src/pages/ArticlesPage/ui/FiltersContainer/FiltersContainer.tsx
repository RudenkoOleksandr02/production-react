import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const {
        onChangeSearch,
        search,
        onChangeSort,
        onChangeOrder,
        sort,
        order,
        onChangeType,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            type={type}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
            order={order}
        />
    );
});
