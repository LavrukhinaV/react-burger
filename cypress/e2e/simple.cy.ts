/* eslint-disable no-undef */

describe('Test', () => {

  beforeEach(() => {
    cy.intercept('GET', 'ingredients', { fixture: 'ingredients' });
    cy.intercept("GET", "user", { fixture: "user.json" });
    cy.intercept("POST", "orders", { fixture: "order.json" }).as("postOrder");

    cy.visit('http://localhost:3000');

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie('accessToken', 'test-accessToken')
  })

  it('should show modal on ingredint card click', () => {
    cy.onIngredientClick()
    cy.getReactModals()
      .get('[data-testid=ingredient-info')
      .should('exist')
  })

  it('should modal contains ingredient info', () => {
    cy.onIngredientClick()
    cy.getReactModals().should('contains.text', 'Краторная булка N-200i')
  })

  it('should drag and drop work', () => {
    cy.dragIngredient(0)
    cy.dropIngredient()
    cy.getBurgerConstructor().should('contains.text', 'Краторная булка N-200i')
  })

  it('should set button active when igredients add to constructor', () => {
    cy.fillConstructor()

    cy.get('[data-testid=submit-order').should('not.have.attr', 'disabled')
  })

  it('should count cost of burger', () => {
    cy.fillConstructor()

    cy.get('[data-testid=burger-cost').should('contains.text', '3024')
  })

  it('should show modal with order number on submit order button', () => {
    cy.fillConstructor()

    cy.submitOrder()
    cy.getReactModals().should('contains.text', '123')
  })

  it('should clear constructor after close modal window with order info', () => {
    cy.fillConstructor()

    cy.submitOrder()
    cy.get('[data-testid=modal-close-button').click()

    cy.getBurgerConstructor().should('contains.text', 'Перенесите ингредиенты в конструктор')
  })
})