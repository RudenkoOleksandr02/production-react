export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'something' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 30,
            currency: 'UAH',
            country: 'Ukraine',
            city: 'Обухов',
            username: 'testuser',
            avatar: 'https://scx2.b-cdn.net/gfx/news/hires/2018/hack.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
