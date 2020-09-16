---
title: Remote Architects Club
date: 2020-08-30
slug: remote-architects-club
published: true
tags: ['frontend', 'nuxt']
canonical_url: true
description: A platform for architects to share their experiences working from home.
image: danrocdev/rac/rac-main-3.png
order: 2
intro: As worldwide lockdowns took place, architects scrambled to figure out how to work remotely. I created RAC to help people share their stories and tell us how does remote work and architecture are getting along.
techstack:
  [
    'NuxtJS',
    'TailwindCSS',
    'GraphQL',
    'Postgres',
    'Netlify',
    'Heroku',
    'Hasura',
    'XState',
    'Jest',
    'Cypress',
    'Sentry',
  ]
url: https://remotearchitects.club
github: https://github.com/remote-architects-club
publish: true
---

<base-img id="danrocdev/rac/rac-main-3.png" alt="Screenshots of Remote Architects Club"></base-img>

## Background

For the past few years, I've been thinking about **flexible work in architecture**. Topics such as 4-day-workweek or working-from-home were unthinkable in most architecture practices. I even tried to start the conversation in my own workplace, asking for more flexibility in my work time, but discussions never went further. The overall thinking was that for architectural design to happen, people need to be in the same room, talking face-to-face, collaborating in real-time.

Until COVID19 and the lockdowns came. Architecture firms worldwide scrambled to get ready to support remote work. Architects had to quickly adapt to working from home.

Such a fast change was unprecedented in architecture, a slow and traditional profession. I felt I had to take this chance to promote the discussion about flexibility in architecture practice, and that's how and why **[Remote Architects Club](https://remotearchitects.club)** was born.

## Design

I wanted RAC to feel fresh, strong, and approachable. The design should be **simple**, **minimalistic**. No big flourishes or the cool-startup-website feel. It had to be a bit "rough around the edges."

<base-img id="danrocdev/rac/rac-logo.png" alt="Logo studies and final logo for RAC" legend="Some logo options and the final chosen font"></base-img>

I went with a black & white design, using an edgy [handwritten font](https://fonts.google.com/specimen/Permanent+Marker) for the logo and a [simple and modern sans-serif font](https://rsms.me/inter/) for all other text. The content was placed on white boxes, elevated over a slightly patterned background, to give the impression of sketch papers placed around on the table.

<base-img id="danrocdev/rac/rac-design-01.gif" alt="Animated GIF scrolling through Remote Architects Club"></base-img>

### Version 1.0

The initial version consisted of a big "contribute" button leading the users to a survey asking "how are things going?" split into questions related to their companies, the tools they were using, and their overall satisfaction with what was happening in their work life.

<base-img id="danrocdev/rac/rac-contribute.gif" alt="Animated GIF going through the initial survey at Remote Architects Club" legend="First step in the survey: company information"></base-img>

I shared the site all over social media, reached out to all architects I knew, and asked them to participate. A popular architecture website picked it up and wrote a story. Contributions poured in, and I ended up with over 100 architects sharing their thoughts.

<base-img id="danrocdev/rac/rac-social-media.png" alt="Screenshot of social media posts for RAC" legend="Social media posts with extracts from user contributions"></base-img>

### Version 2.0

The current version consists of a simple dashboard with the Phase I contributions and a link to a new survey asking about "the new normal." This time, I went with a [Typeform survey](https://remotearchitectsclub.typeform.com/to/hOBrKpIj) instead of a custom-built one.

## Implementation

RAC is a **NuxtJS** app hosted on Netlify, with a **Hasura** backend hosted on Heroku.

In the first version, when I had a custom-built survey with logical jumps, I decided to dive deep into **[statecharts](https://statecharts.github.io/)** and the excellent library **[XState](https://xstate.js.org/)** for state management. [A JSON file](https://github.com/remote-architects-club/frontend-nuxt/blob/master/config/formConfig.json) defined the survey questions, and the logical jumps between the questions were described in each section's **[state machines](https://github.com/remote-architects-club/frontend-nuxt/blob/master/fsm/contributeMachine.js)**. This allowed me to quickly overview all possible paths within the survey and gave me the flexibility to make easy changes whenever necessary.

The survey results were then saved on a **Postgres** database served by a **GraphQL** endpoint from a Hasura app. They were subsequently used to feed graphs and maps with the results displayed on the home page.

## Tests

Although I implemented the necessary unit tests at RAC, the focus was on **[integration tests](https://github.com/remote-architects-club/frontend-nuxt/tree/master/cypress/integration)**. I used, for the first time, **[Cypress.io](https://cypress.io)** for the job, and can't recommend it enough. It was simple to set up, and writing tests were actually quite fun. By integrating these tests to a CI/CD pipeline ([TravisCI](https://travis-ci.org)), they gave me the confidence to push fixes and modifications as needed.

## Lessons Learned

It was inspiring to leverage such powerful tools as **XState** and **Cypress.io** to build RAC. I realized how useful **statecharts** can be while trying to manage a complex state, and I feel compelled to use it again on many future projects. Cypress.io quickly became my go-to tool for testing, even before writing unit tests.

For the first time, I felt I was deploying a **robust app** and felt safe within my CI/CD pipeline.

However, my approach to its UI could have been more careful. I was basically designing as I built it. Speed was a defining factor here, as I had to get it up-and-running as fast as offices were getting into lockdown. However, today I would have spent a little more time thinking it through and adding delightful touches to the UI.
