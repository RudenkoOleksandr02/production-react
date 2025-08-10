import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Miscellaneous', () => {
        it('Go to main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Switching to a non-existent route', () => {
            cy.visit('/something');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User is NOT authorized', () => {
        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
    });

    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Go to the page with the list of articles', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
