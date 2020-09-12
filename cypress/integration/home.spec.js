// tests that everything that should be on home is on home

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Contains the logo', () => {
    cy.get('[data-cy=logo]').should(($logo) => {
      const text = $logo.text()
      expect(text).to.include('danroc.dev')
    })
  })

  // SECTIONS
  // INTRO
  describe('Intro section', () => {
    it('Contains the intro section', () => {
      cy.get('[data-cy=section-intro]')
    })
    it('Jumps to anchor #about when click on Read More', () => {
      cy.get('[data-cy=section-intro]').find('a').first().click()
      cy.url().should('include', '#about')
    })
    it('Contains my name within the intro text', () => {
      cy.get('[data-cy=section-intro]')
        .find('p')
        .should(($p) => {
          const text = $p.text()
          expect(text).to.include('Daniel')
        })
    })
  })
  describe('Projects section', () => {
    it('Contains the Projects section with a H2 title', () => {
      cy.get('[data-cy=section-projects]')
        .find('h2')
        .should(($h2) => {
          const text = $h2.text().toLowerCase()
          expect(text).to.include('projects')
        })
    })
    it('Contains a project list', () => {
      cy.get('[data-cy=section-projects]')
        .find('[data-cy=project-list]')
        .find('[data-cy=project-list-item]')
        .first()
        .as('project')
        .within(() => {
          cy.get('h3')
          cy.get('p')
          cy.get('a').first().should('have.text', 'link')
          cy.get('a').last().should('have.text', 'github')
        })
    })
  })
  // PROJECTS

  // ARTICLES
  describe('Articles section', () => {
    it('Contains the Articles section with a H2 title', () => {
      cy.get('[data-cy=section-articles]')

        .find('h2')
        .should(($h2) => {
          const text = $h2.text().toLowerCase()
          expect(text).to.include('articles')
        })
    })
    it('Contains a list of articles', () => {
      cy.get('[data-cy=section-articles]')
        .find('[data-cy=article-list]')
        .find('[data-cy=article-list-item]')
        .first()
        .as('article')
        .within(() => {
          cy.get('datetime')
          cy.get('p')
          cy.get('h3').invoke('text').as('title')
          cy.get('a').should('have.length', 3)
        })
    })
  })

  // ABOUT
  describe('About section', () => {
    it('Contains the About section', () => {
      cy.get('[data-cy=section-about]')
    })
    it('Contains an image (my photo)', () => {
      cy.get('[data-cy=section-about]').get('img')
    })
  })
})
