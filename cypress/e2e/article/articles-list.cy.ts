describe('The user goes to a page with a list of articles', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('and the articles are loaded successfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('example with stub', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    describe('Search and sort', () => {
        let currentArticleId = '';

        beforeEach(() => {
            cy.createArticle().then((article) => {
                currentArticleId = article.id;
            });
        });
        afterEach(() => {
            cy.removeArticle(currentArticleId);
        });
        it('and looking for an article', () => {
            cy.searchArticles('TESTING ARTICLE');
            cy.getByTestId('ArticleListItem.Title').should(
                'have.text',
                'TESTING ARTICLE',
            );
        });
        it('and sorts by views descending', () => {
            cy.sortArticles('views', 'desc');
        });
    });
});
