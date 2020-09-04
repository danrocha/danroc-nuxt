---
title: Awarded
date: 2020-08-30
slug: awarded
published: true
tags: ['frontend', 'nuxt']
canonical_url: true
description: An app to help you keep track of award-winning movies and books.
image: danrocdev/yellow-star-blue.png
order: 4
intro: As I started to dive deep into modern web development, I developed Awarded as a testing ground for my newly-acquired skills.
techstack:
  [
    'VueJS',
    'TailwindCSS',
    'GraphQL',
    'Postgres',
    'Netlify',
    'Heroku',
    'Postgraphile',
    'NodeJS',
    'Sentry',
    'AWS S3',
    'Bulma',
  ]
url: https://awarded.to
github: https://github.com/awarded-app
---

As I started to dive deep into modern web development, I developed Awarded as a testing ground for my newly-acquired skills.

## Background

Back in 2016, when I first started to understand modern web development, I decided to apply what I learned by building a real-world app.

I had recently been to Brazil, visiting my mom. It was January, and, as usual, we sat down to watch all Oscar-nominated movies from that year. My mom would keep track of all nominations on a little piece of paper, which got messier and messier as the days went by. Once, she lost it and had to write it all over again, searching online for the latest nominations.

I created Awarded for her: a one-stop website where you could easily keep track fo award-nominated movies.

<base-img id="danrocdev/awarded-banner.jpg" alt="Banner for Awarded"></base-img>

## History

The first-ever version of Awarded was a Python Flask app. I was inspired by my learnings at [Harvard's CS50](https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0) course and, later, by Miguel Grinberg's excellent [Flask tutorials](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world).

The interface was simple, Reddit-like: indented lists that would reveal information with as few clicks as possible.

But I quickly hit some blocks while trying to create the fast interactions I wanted. I dived into jQuery, but a simple accordion-like opening of an item, while keeping its state, quickly became a hassle to implement. I felt it was all so messy and that there had to be another way.

That's when I discovered VueJS and the world of single-page applications. And that's where my excitement and love for front end development started to become what it is today.

## Development

Awarded is currently built as a VueJS-powered single-page application. It was my first foray into making something like this, and the current code shows it. I am not proud of it. But it is working, with few errors and bugs.

<base-img id="awarded/awarded-home.png" alt="Screenshot of the homepage of Awarded"></base-img>

Data is pulled from a [Postgraphile](https://www.graphile.org/postgraphile/) GraphQL server running on top of a Postgres database. It all runs in a Dokku container on DigitalOcean. Postgraphile was a revelation for me: I suddenly could focus on data modeling and front end code without worrying about creating Rest API endpoints for each request.

<base-img id="awarded/movies-01-awards-list.png" alt="Screenshot of Awarded"></base-img>

It is a simple app, but there is a certain level of complexity, especially concerning data entry. There are many APIs out there that provide movie data ready to be consumed. I leveraged the excellent Movie Database for that. However, there are no APIs containing awards information for these movies. IMDb does not provide an API, and each Award website presents its data in a different way.

<base-img id="awarded/movies-03-edition-winners.png" alt="Screenshot of Awarded"></base-img>

That's why I created a complex administration area for Awarded to allow for data entry. It works well, but today, I would try to develop scrapers for the data collection and review tools for data correction.

## Future

I haven't touched Awarded in a while. As I wrote before, I would love to retake it and make it move forward.

Also, I see it as my coding playground, and I've come a long way since I last played with it. Nowadays, I would make it into a fully static Nuxt app, switching JavaScript with TypeScript and Postgraphile with Hasura. Oh, and lots of scrapers for data entry, to try and finally make it complete.

<base-img id="awarded/books-03-edition.png" alt="Screenshot of Awarded"></base-img>
