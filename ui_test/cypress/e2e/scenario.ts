import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open Flip home page', () => {
  cy.visit('/')
})

Then('I will see the home page has loaded', () => {
  cy.get('.css-1i4e2jv > .chakra-heading')
    .should('have.text', 'Bebas transaksi, ke siapa aja.')
})

When('I click toggle language', () => {
  cy.get('.css-1qcxquc')
    .click()
})

Then('I will see the text in page change to English', () => {
  cy.get('.css-1i4e2jv > .chakra-heading')
    .should('have.text', 'Free financial transactions, to anyone.')
})

When('I scroll to flip FAQ about cellular providers', () => {
  cy.get('div.css-q8pb6o > div > h2')
    .scrollIntoView()
    .should('be.visible')
    .get('div.css-q8pb6o > div > :nth-child(5) > h2 > button')
    .click()
})

Then('I will see Telkomsel Indosat Ooredoo and XL provider supported by Flip', () => {
  cy.get('div.css-q8pb6o > div > :nth-child(5) > div > div')
    .contains('Telkomsel')
    .contains('Indosat')
    .contains('XL')
})

When('I click send money aboard', () => {
  cy.get('.css-kaqrt5 > .panel-container > .chakra-button')
  .click()
})

When('I click dropdown select the destination country', () => {
  cy.get('#menu-button-7')
    .click()
})

When('I input {string} as currency code', (currencyCode: string) => {
  cy.get('.chakra-input')
    .type(currencyCode)
    .get('.css-380zxe')
    .contains('GBP')
    .click()
})

When('I input nominal currency {string} on IDR field', (nominal: string) => {
  cy.get(':nth-child(1) > .css-19t8ja4')
    .type(nominal)
})

Then('I will see current rate and transfer fee', () => {
  cy.contains('Kurs Saat Ini')
})
