---
title: Berlin Architectural Network
date: 2020-08-30
slug: berlin-architectural-network
published: true
tags: ['frontend', 'nuxt']
canonical_url: true
description: Website for Berlin's largest architecture community.
image: danrocdev/Linkedin_avatar.png
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

Starting this year, we decided to bring the community to the next level: we set out to create the best resource for architecture professionals in Berlin.

The keystone of this goal is ·ban's new website. Using an iterative approach to design and implementations, we started by creating a simple landing page a form to collect the email addresses of our members.

Slowly, we are implementing new sections and tools: first the Event's sections, mirroring our events posted on meetup.com. More recently, we implemented a Jobs section.

Among the idea for upcoming features is a list of all architecture offices in Berlin and a forum for our members. However, we are basing all our decisions on our member's feedback. Therefore, we avoid feature-creep and keep our content relevant to best serve our community.

## Design

Using Figma as our collaboration tool, we designed ·ban's identity from scratch. We wanted ·ban to be different, quirky, fun, and unique. Our initial logo ideas involving the famous Berlin TV Tower, quickly evolved into an abstract representation of the landmark using characters from our chosen logotype font: Share Tech Mono.

We extended the idea to develop what we now call the ·ban man: a series of stick-figure-like characters who represent the diverse background of our members.

As we transported the identity to the website, we started by making it simple: white background, black as the main color, with red as the accent color. Ue paired our logo font with the simple, but versatile sans-serif font XXX, using it in a single size with varying weights for almost all text.

## Implementation

The design was implemented as a Nuxt app, coupled with TailwindCSS. We are leveraging Nuxt's full-static more, using asyncData calls to generate server-side rendered HTML files. This makes the site blazing fast and SEO friendly. As a CMS, we are using Storyblok, and all our images are optmized and served by Cloudinary.
