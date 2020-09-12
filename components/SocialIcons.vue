<template>
  <ul class="flex space-x-2 text-lg text-teal-500">
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
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SocialIcons',
})
</script>
<style scoped>
li {
  animation: 0.1s scaledown ease-in 1 normal forwards;
}
li:hover {
  animation: 0.1s scaleup ease-out 1 normal forwards;
}

@keyframes scaleup {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
@keyframes scaledown {
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
