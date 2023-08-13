/* eslint-disable no-undef */

Cypress.Commands.add("dragIngredient", (ingredientNumber) => {
  cy.get('[data-testid=ingredient-item').eq(ingredientNumber).trigger('dragstart');
});

Cypress.Commands.add("dropIngredient", () => {
  cy.get('[data-testid=burger-constructor').trigger('drop');
});

Cypress.Commands.add("fillConstructor", () => {
  cy.dragIngredient(0)
  cy.dropIngredient()

  cy.dragIngredient(1)
  cy.dropIngredient()

  cy.dragIngredient(2)
  cy.dropIngredient()
});

Cypress.Commands.add("submitOrder", () => {
  cy.get('[data-testid=submit-order').click()
});

Cypress.Commands.add("onIngredientClick", () => {
  cy.get('[data-testid=ingredient-item').eq(0).click()
});

Cypress.Commands.add("getBurgerConstructor", () => {
  cy.get('[data-testid=burger-constructor')
});

Cypress.Commands.add("getReactModals", () => {
  cy.get('[data-testid=react-modals')
});