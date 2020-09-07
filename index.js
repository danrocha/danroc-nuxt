const { parse, compileTemplate } = require('@vue/compiler-sfc')
const { transform } = require('@babel/core')
const babelPreset = require('@babel/preset-env')

module.exports.process = (source) => {
  const parsed = parse(source)
  const template = compileTemplate({
    source: parsed.descriptor.template.content,
  }).code
  const compiledTemplate = transform(template, { presets: [babelPreset] }).code
  const compiledScript = transform(parsed.descriptor.script.content, {
    presets: [babelPreset],
  }).code

  return (
    compiledTemplate +
    compiledScript +
    '; module.exports = {...module.exports.default, render};'
  )
}
