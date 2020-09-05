import { createWrapper } from '@vue/test-utils'
import { mountCallback } from 'cypress-vue-unit-test'
import Logo from '~/components/Logo.vue'

describe('Logo', () => {
  beforeEach(mountCallback(Logo))

  it('should initialize', () => {
    cy.wrap(Cypress.vue)
      .should('not.be.undefined')
      .get('[data-cy=logo]')
      .should('have.text', 'danroc.dev')

    cy.wrap(createWrapper(Cypress.vue)).should((cmp) => cmp.isVueInstance())
  })
})
