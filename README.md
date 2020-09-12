<p align="center"><a href="https://danroc.dev/"><img src="https://raw.githubusercontent.com/danrocha/danroc-nuxt/master/github-logo.png"/></a></p>
<p align="center">Codebase of the website <a href="https://danroc.dev/"><strong>danroc.dev</strong></a>, my personal dev blog.</p>
<br/><br/>
<p align="center">
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fdanroc.dev"/> 
  <img src="https://img.shields.io/netlify/ee7edf64-8be7-4060-b592-09f8b65b0804"/> 
  <img src="https://img.shields.io/github/last-commit/danrocha/danroc-nuxt"/> 
  <img src="https://img.shields.io/github/languages/count/danrocha/danroc-nuxt"/> 
  <img src="https://img.shields.io/github/languages/top/danrocha/danroc-nuxt"/>
  <!-- <a href="https://github.com/danrocha/danroc-nuxt/actions"><img src="https://github.com/danrocha/danroc-nuxt/workflows/cypress-run/badge.svg"/>Cypress</a> -->
</p>

## Built With

- [TypeScript](https://nuxtjs.org)
- [Nuxt.js](https://nuxtjs.org) - Vue.js framework
- [Nuxt Content](https://content.nuxtjs.org/) + Markdown - Content
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Jest](https://jestjs.io/) - unit testing
- [Cypress.io](https://www.cypress.io/) - integration tests
- [Github Actions](https://github.com/features/actions) - CI/CD

## Hosted on

- [Netlify](https://www.netlify.com/) - front end, static hosting (this repo)

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run unit tests
$ npm run test:unit

# run integration tests
$ npm run cy:open
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Git branching system

I follow the "[3-flow](https://www.nomachetejuggling.com/2017/04/09/a-different-branching-strategy/)" branching system:

- There are three branches in origin: `master`, `candidate`, `release`
- Normal development happens on `master`. All new commits are rebased.
- Features that are incomplete are put behind feature toggles, ideally dynamic toggles that can be changed without a redeploy
- To cut a release, `master` is merged into `candidate` with a `--no-ff` merge commit
- Any bugs found during a `candidate`’s QA phase are fixed in `candidate` and then merged into `master` with a `--no-ff` merge commit
- When a candidate is released to production, it’s `push --force`d to the tip of `release`
- Any production hotfixes happen in `release` and are then merged into `candidate` which is then merged into `master`.

## Author

- **Daniel da Rocha** - Creator and Full-stack Developer - [danrocha](https://github.com/danrocha)

## License

This project is licensed under the MIT License.
