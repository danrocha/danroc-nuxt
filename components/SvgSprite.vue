<template>
  <svg width="0" height="0" style="display: none" v-html="svgSprite" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const svgContext = require.context(
  '!svg-inline-loader?' +
    'removeTags=true' + // remove title tags, etc.
    '&removeSVGTagAttrs=true' + // enable removing attributes
    '&removingTagAttrs=fill' + // remove fill attributes
    '!@/assets/icons', // search this directory
  true, // search subdirectories
  /\w+\.svg$/i // only include SVG files
)
const symbols: String[] = svgContext.keys().map((path) => {
  // get SVG file content
  const content = svgContext(path)
  // extract icon id from filename
  const id = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  // replace svg tags with symbol tags and id attribute
  return content
    .replace('<svg', `<symbol id="${id}"`)
    .replace('svg>', 'symbol>')
})
export default defineComponent({
  name: 'SvgSprite',
  setup() {
    const svgSprite: String = symbols.join('\n') // concatenate all symbols into $options.svgSprite
    return {
      svgSprite,
    }
  },
})
</script>
