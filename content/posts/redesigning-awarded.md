---
title: Redesigning Awarded
date: 2020-02-26
slug: redesigning-awarded
published: true
tags: ['redesign', 'awarded']
series: false
canonical_url: true
description: Awarded needs a redesign - it is currently full of bugs and its interface is inconsistent and messy. I will use its redesign as a learning opportunity to help level up my web development skills.
---

A few years back, as I was discovering the world of modern web development, I had the idea of diving into it to build a database of award winning movies.

<base-img id="danrocdev/awarded-banner.jpg"  alt="Banner for Awarded"></base-img>

I called it **[Awarded](https://awarded.to)**.

The project went from a first version using **Flask**, **REST**, **jQuery**, and **Bootstrap**, to the latest release built with **Vue**, **GraphQL**, and **TailwindCSS**. It's evolution also represents my journey into learning web development.

And it is within this journey that now, having evolved my understanding of so many areas, I decided I want to give another shot at rewriting and redesigning Awarded.

In this article, I will explain the reasoning for this, based on the history of the app and my own learning journey. I will then set the stage for the upcoming work: what do I intend to do and how.

## History

The app's idea came from a recent trip I had made to Brazil to visit my family. It was movie awards season and, as usual, I sat down with my mom every night to watch all nominated movies. She kept a little list of all of them, and went crossing them one by one as we watched them.

So I decided I would build an app to help her keep track of all awards and nominations. A place where she could easily check all awards and all movies and save them on lists.

The original vision for the UI was to make it [Reddit](https://www.reddit.com/).- and [Workflowy](https://workflowy.com/)-like: **mostly text base, with expandable sections like bullet points.** It should be fast, easy to use, with not much fluff.

### Version 1.0

I named the app **Awarded** and went on to build it. Version 1.0 was built on **[Flask](https://palletsprojects.com/p/flask/)**, a Python web application framework. I first learned about it while taking [Harvard's CS50 online course](https://www.edx.org/course/cs50s-introduction-to-computer-science). I was quickly hooked at how easy it was to build fast, responsive applications for the web.

In the backend, a built a REST API, grabbing data from a **PostgresSQL** database with the aid of **[SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)**. It was all working fine until I ran into some issues when trying to use **jQuery** to add reactivity to my admin pages. After a lot of spaghetti-coding, I figure there had to be a better way.

### Version 2.0

That's when I started looking into the world of **Javascript frameworks**. [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue](https://vuejs.org). After a lot of reading about them, I finally bought a [book](https://www.newline.co/vue) and went on to learn **Vue**. It was a revelation. With it, I built version 2.0 of the administration area of Awarded. Vue was amazing. Easy to use, powerful and fun.

With the whole administration area of Awarded implemented, I started adding data. The backend, however, was still the same Flask project accessing a Postgres database using SQLAlchemy, and deploying REST endpoints for my requests.

Most of the data I needed to insert into Awarded could be automatically acquired via APIs. **[The Movie Database](https://www.themoviedb.org/)** was my main source. However, a lot has to be entered manually. I can get movie information, but I need to manually attach each movie and its crew to their respective nominations and awards. I'll get more into details about the pains of creating my database schema later on.

But, suffice to say, it was a pain.

### Version 3.0

Life came in the way, I moved countries, and would only restart work at Awarded after I quit my job and settled on working from home.

By that time, I had learned about **[GraphQL](https://graphql.org/)** and **[functional CSS](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)**, already using it in some other small projects. When I reopened the Awarded code base to restart working on it, of course I decided to rewrite everything.

I still used Vue, of course, but started the whole administration area from scratch using GraphQL and **[Bulma](https://bulma.com/)**. The backend turned into a simple Node [Express](https://expressjs.com/) server running **[Postgraphile](https://www.graphile.org/postgraphile/)**, which automatically turned my Postgres database into a fully-featured GraphQL API.

<base-img id="danrocdev/awarded-admin-usage.gif"  alt="Animated GIF showing Awarded's admin area" legend="Admin area"></base-img>

I also finally built the frontend, also with a lot of Vue. I replace Bulma by [TailwindCSS](https://tailwindcss.com) to have finer control over the look and feel of the app, and added **[Apollo GraphQL](https://www.apollographql.com/)** to communicate with the backend.

<base-img id="danrocdev/awarded-usage.gif"  alt="Animated GIF showing Awarded Movies" legend="Awarded Movies"></base-img>

Once it was up and running, I added a whole new section: **[Awarded Books](https://awarded.to/books)**. As with **[Awarded Movies](https://awarded.to/movies)**, the idea was to turn it into the ultimate reference of award-nominated books online (with some affiliate-marketing aspirations to it, of course).

<base-img id="danrocdev/awarded-books.gif"  alt="Animated GIF showing Awarded Books" legend="Awarded Books"></base-img>

Exciting times: I launched, kept adding data, getting people to use it. It was always gonna be a side project I did for fun, so I didn't really care if it got traction or not. The main thing was there, working, and it was fun to use.

So why bother rewriting it one more time?

## Problems arise

As I kept working on it and adding data, I kept doing small changes on the code to fix this or that bug that I found while using the site.

Then one day I installed **[Sentry](https://sentry.io/)** to automatically report bugs users might be encountering. As a complete amateur, of course I did not implement any automated testing. And of course, **I was suddenly flooded with Sentry bug warnings.**

<base-img id="danrocdev/sentry.png"  alt="Screenshot of Awarded error as reported on Sentry" legend="Sentry error reports"></base-img>

On one side, it was cool to see people were actually using the site. But it was also showing what a bad experience they were having. Bugs were plenty and many were unexplicable, due to the mess the app's codebase was in.

Every time I had to get into the code to try and figure a solution out, I got more and more lost. It was all spaghetti. **I was afraid I would make things worse just by trying to fix them.**

<base-img id="danrocdev/awarded-codebase.png"  alt="Screenshot of Awarded's codebase" legend='"Component-creep" in the codebase'></base-img>

I had also many ideas for new features and fun things I wanted to try. But it was just impossible with that code. With time, I also had learned so many new things concerning web development, and it was easy to see all the glaring mistakes I did when I coded this version.

Moreover, I wanted to have a News section on Awarded. Because I wanted to used markdown for my posts, I ended up creating a separate Gridsome project just for it. Needless to say, sinchronizing styles between both projects was a bit of a pain, as was the whole deployment process.

<base-img id="danrocdev/awarded-news.gif"  alt="Animated GIF showing Awarded News" legend="Awarded News"></base-img>

I knew I had to rewrite it, for my own sanity. And to finally get a proper version out there, with less bugs and more useable.

## What do I want to do

There are many things I have planned for this rewrite. For sure many more topics will come up but, for now, these are my main intentions:

### Move to Nuxt.js

This is, by far, the main goal: move from [Vue CLI](https://cli.vuejs.org/) to **[Nuxt.js](https://nuxtjs.org/)**. There are many reasons I believe using Nuxt will be beneficial for Awarded:

- **SSR**: the app's data almost never changes. Once an award or movie is added, most of this information is static and could just be static HTML files rendered server-side. It does not make sense to make API calls every time a page with the same data is loaded. By implementing SSR the site will not only be faster, but it would also be SEO optimized out of the box

- **PWA**: one day I want Awarded to become an app on your smartphone. Nuxt's PWA capabilities will allow future iterations to quickly be ported to apps

- **Code organization**: Nuxt's opinionated code organization principles, with layouts and pages, makes it perfect for Awarded's multiple categories. Right now I only have Books and Movies, but there is the ambition to grow it to many more directions in the future (think Games, TV, music, etc.)

In short, Nuxt will allow Awarded to be **future-proof, more organized and efficient.**

### Cleanup and optimize the database schema

I created the database schema as I moved along with the app. There are a lot of leftovers everywhere. I want to look at everything again and understand where things can and should be improved.

### Implement Testing

Now, this will be a big one. **Testing** is a gaping hole in my knowledge of web development. I skimmed over it it but never really learned and implemented it. It was always something that got me stuck and was quickly discarded.

This time I will not take any detours. I will go deep into testing and will try my best to implement it wherever it makes sense. I want my Sentry notifications to be a rare appearance in my inbox. And I want to stop being afraid to push code and break everything.

### Implement CI/CD

Also another hole in my practice. I want to learn how to implement it, and will take this as an opportunity. It should also go well along the whole "implement testing" subject.

### Replace Vuex by XState

One of the most exciting topics I got into recently were **[Statecharts](https://statecharts.github.io/)**. After watching a [talk by David K. Piano about state machines](https://www.youtube.com/watch?v=RqTxtOXcv8Y), and quickly trying out his library **[XState](https://xstate.js.org/)** in another project, I was quickly convinced this was a way to handle state which was so much clearer and more organized than using Vuex. It just made sense.

I want to go full-on into statecharts in this rewrite. I'm also looking into ditching Vuex in the process.

### Develop a design system

Awarded is a simple app. There is very little variation on types of information. However, as it currently stands, there is a lot of variation on how this information is displayed.

Too many font sizes, mixed offsets, weird alignment variations. **I want to unify it all in a very cohesive whole.**

For that, I might also review some of the design decisions I took while developing the app. I want to revisit my original goals and see how they still hold up. I might shake things up a bit on the way.

### Use CSS Grid

While I love **TailwindCSS** and will continue to use it in this new version, I intend to dive deep into **[CSS Grids](https://learncssgrid.com/)** and use it extensively on many parts of the site.

I have many ideas of which problems CSS Grid will solve for me at Awarded, and I am sure it will be a great replacement (and companion) to all the _flexbox_ I use everywhere.

---

You see, I see Awarded as my **learning arena**. I love the idea of the app, and love to work on it. It gives me joy and it is incredibly fun. As I learn and evolve, I want to apply what I learn, and Awarded is perfect for that.

**It is my house and my playground.**

## Next Steps

In the next article I will start by analyzing the current app's **architecture** and start planning the move over to Nuxt.js.

I will also look closely into the **database schema design** and how it relates to the frontend design.
