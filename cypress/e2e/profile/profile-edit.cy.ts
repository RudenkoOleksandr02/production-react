let profileId = '';

describe('The user goes to the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('and the profile has been successfully loaded', () => {
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'test');
    });
    it('and edits its data', () => {
        cy.updateProfile('newFirstName', 'newLastName');
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'newFirstName');
        cy.getByTestId('ProfileCard.lastName').should('have.value', 'newLastName');
    });
});
