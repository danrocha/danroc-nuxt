<template>
  <div>
    <svg-sprite />
    <header class="mb-12">
      <div class="flex flex-wrap items-center justify-between">
        <h1 class="font-mono text-4xl text-pink-600">
          danroc.dev
        </h1>
        <ul class="flex space-x-2 text-gray-800">
          <li>
            <a href="//twitter.com/danrocc" target="_blank" rel="nofollow"
              ><svg-icon icon="twitter"
            /></a>
          </li>
          <li>
            <a href="//github.com/danrocha" target="_blank" rel="nofollow"
              ><svg-icon icon="github"
            /></a>
          </li>
          <li>
            <a href="//linkedin.com/in/danrocha" target="_blank" rel="nofollow"
              ><svg-icon icon="linkedin"
            /></a>
          </li>
        </ul>
      </div>
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <footer class="pt-4 my-8 text-sm text-gray-500 border-t border-gray-500">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Powered by <a href="//nuxtjs.org"> Nuxt.js </a></span>
    </footer>
  </div>
</template>
