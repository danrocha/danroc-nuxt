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
  it('Contains the intro section', () => {
    cy.get('[data-cy=section-intro]')
      .as('section-intro')
      .find('a')
      .first()
      .click()
    cy.url().should('include', '#about')
    cy.get('@section-intro')
      .find('p')
      .should(($p) => {
        const text = $p.text()
        expect(text).to.include('Daniel da Rocha')
      })
  })

  // PROJECTS
  it('Contains the Projects section with an project list', () => {
    cy.get('[data-cy=section-projects]')
      .as('section-projects')
      .find('h2')
      .should(($h2) => {
        const text = $h2.text().toLowerCase()
        expect(text).to.include('projects')
      })
    cy.get('@section-projects')
      .find('[data-cy=project-list]')
      .find('[data-cy=project-list-item]')
      .first()
      .as('project')
      .within(($project) => {
        cy.get('h3')
        cy.get('p')
        cy.get('img')
        cy.get('a').first().should('have.text', 'link')
        cy.get('a').last().should('have.text', 'github')
      })
  })

  // ARTICLES
  it.only('Contains the Articles section', () => {
    cy.get('[data-cy=section-articles]')
      .as('section-articles')
      .find('h2')
      .should(($h2) => {
        const text = $h2.text().toLowerCase()
        expect(text).to.include('articles')
      })
    cy.get('@section-articles')
      .find('[data-cy=article-list]')
      .find('[data-cy=article-list-item]')
      .first()
      .as('article')
      .within(($article) => {
        cy.get('datetime')
        cy.get('p')
        cy.get('h3').invoke('text').as('title')
        cy.get('a').should('have.length', 3)
      })
  })

  // ABOUT
  it('Contains the About section', () => {
    cy.get('[data-cy=section-about]').get('img')
  })
})
