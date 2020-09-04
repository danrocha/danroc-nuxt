---
title: Berlin Architectural Network
date: 2020-08-30
slug: berlin-architectural-network
published: true
tags: ['frontend', 'nuxt']
canonical_url: true
description: Website for Berlin's largest architecture community.
image: danrocdev/ban/Linkedin_avatar.png
order: 1
intro: Together with architect Maria Bragança, we designed and developed the website for Berlin's largest architecture community.
techstack:
  [
    'NuxtJS',
    'TailwindCSS',
    'Storyblok',
    'GraphQL',
    'Postgres',
    'Python',
    'Netlify',
    'Heroku',
    'Hasura',
    'AWS Lambda',
    'Serverless',
    'Sentry',
  ]
url: https://architecturalnetworks.com/berlin
github: https://github.com/architectural-networks
---

## Background

The community Berlin Architecture Network (·ban), exists as a [MeetUp group](https://www.meetup.com/BAN-Berlin-Architectural-Network/) since 2017. Since then, it gathered almost 600 members, architecture professionals looking to connect, exchange knowledge, and collaborate with each other.

<base-img id="danrocdev/ban/ban-meetup.png"  alt="Screenshot of Berlin Architectural Network on meetup.com"></base-img>

Starting this year, we decided to bring the community to the next level: we set out to create the best resource for architecture professionals in Berlin.

The keystone of this goal is **[·ban's new website](https://architecturalnetworks.com/berlin)**. Using an iterative approach to design and implementations, we started by creating a simple landing page a form to collect the email addresses of our members.

<base-img id="danrocdev/ban/ban-website.png"  alt="Screenshot of the Berlin Architectural Network website" :shadow="false"></base-img>

Slowly, we are implementing new sections and tools: first the **Events** section, mirroring our events posted on meetup.com. More recently, we implemented a **Jobs** section.

Among the idea for upcoming features is a list of all architecture offices in Berlin and a forum for our members. However, we are basing all our decisions on our member's feedback. Therefore, we avoid feature-creep and keep our content relevant to best serve our community.

## Design

Using Figma as our collaboration tool, we designed ·ban's identity from scratch. We wanted ·ban to be **different**, **quirky**, **fun**, and **forward-looking**. Our initial logo ideas involving the famous Berlin TV Tower quickly evolved into an abstract representation of the landmark using characters from our chosen logotype font: [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono).

<base-img id="danrocdev/ban/ban-logo-variations.png" legend="Early logo studies" alt="Logo variations"></base-img>

We extended the idea to develop what we now call the **_·ban people_**, a series of stick-figure-like characters who represent the diverse background of our members. They all derive from the main _·ban person_ based on the [Vitruvian Man](https://en.wikipedia.org/wiki/Vitruvian_Man).

<base-img id="danrocdev/ban/ban-logo.png" legend="·ban logo and the ·ban person" alt="Logo"></base-img>

<base-img id="danrocdev/ban/ban-people.png" legend="the ·ban people" alt="Logo"></base-img>

As we transported the identity to the website, we started by making it simple: white background, black as the main color, with red as the accent color. Ue paired our logo font with the simple, but versatile sans-serif font [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans), using it in a single size with varying weights for almost all text.

<base-img id="ban/ban-early-designs.png" legend="Early designs: mobile-first" alt="Screenshot of our Figma file"></base-img>

## Implementation

<base-img id="ban/ban-design-process.png" legend="Design files of our Event section" alt="Screenshot of our Figma file"></base-img>

The design was implemented as a Nuxt app, coupled with TailwindCSS. We are leveraging Nuxt's full-static mode, using _asyncData_ calls to generate server-side rendered HTML files. This makes the site blazing fast and SEO friendly. As a CMS, we are using [Storyblok](https://storyblok.com), and all our images are optmized and served by [Cloudinary](https://cloudinary.com).

```javascript
// berlin/index.vue

export default defineComponent({
  setup() {
    const {
      $content,
      app: { $storyapi },
    } = useContext()
    // fetch about text from nuxt-content
    const about = useAsync(async () => await $content('homeAbout').fetch())
    // fetch events from storyblok
    const events = useAsync(async () => {
      const res = await $storyapi.get('cdn/stories', {
        starts_with: 'events/',
        filter_query: {
          date: {
            gt_date: YESTERDAY,
          },
        },
        sort_by: 'content.date:asc',
      })
      return res.total ? res.data.stories : []
    })
    // fetch jobs from hasura
    const jobs = useAsync(async () => await invokeFetchLatest())

    return {
      about,
      events,
      jobs,
    }
  },
})
```

To support our Jobs section, I created [a scraper](https://github.com/architectural-networks/ban-jobs-scraping) which crawls several online job boards searching for architecture jobs in Berlin. The scraper is written in Python (using the excellent [Scrapy](https://scrapy.org/) framework) and is deployed to [AWS Lambda](https://aws.amazon.com/lambda/) (with the help of [Serverless](https://www.serverless.com/)), where a Cloudwatch event rule fires it every 10 minutes to gather new data.

Additionally, as it finds new jobs and adds to our database, it posts the new link on our Slack workspace, using the Slack API.

<base-img id="ban/ban-slack.png" legend="Our ·ban-jobs Slack bot posting new offers on our workspace" alt="Screenshot of our Slack workspace"></base-img>
