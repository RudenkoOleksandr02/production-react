import { Article } from '../../../src/entities/Article';
import { SortOrder } from '../../../src/shared/types/sort';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Топ-10 фич JavaScript за 2022 год',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    views: 254000,
    createdAt: '15.03.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'something' },
        body: article ?? defaultArticle,
    }).then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'something' },
    });
};

export const searchArticles = (searchValue: string) => {
    cy.getByTestId('ArticlesPageFilter.Search').type(searchValue);
};

type ArticleSortField = 'views' | 'title' | 'createdAt'

export const sortArticles = (
    sortFieldOption: ArticleSortField,
    orderOption: SortOrder,
) => {
    cy.getByTestId('ArticleSortSelector.SortFieldOptions').select(sortFieldOption);
    cy.getByTestId('ArticleSortSelector.OrderOptions').select(orderOption);
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
            searchArticles(searchValue: string): Chainable<void>;
            sortArticles(sortFieldOption: ArticleSortField, orderOption: SortOrder): Chainable<void>;
        }
    }
}
