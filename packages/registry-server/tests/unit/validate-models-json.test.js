'use strict'

const test = require('brittle')
const { createModelSchema } = require('../../scripts/validate-models-json')

const schema = createModelSchema(new Set(['MIT']))
const model = {
  source: 'https://huggingface.co/example/models/resolve/' + 'a'.repeat(40) + '/model.gguf',
  licenseId: 'MIT'
}

test('registry submissions accept canonical engines and existing package ids', (t) => {
  for (const engine of [
    'llamacpp-completion',
    'llamacpp-decision',
    'llamacpp-embedding',
    'whispercpp-transcription',
    'nmtcpp-translation',
    'tts-ggml',
    'ggml-ocr',
    '@qvac/embed-llamacpp'
  ]) {
    t.ok(schema.safeParse({ ...model, engine }).success, engine)
  }
})

test('registry submissions reject malformed engine ids', (t) => {
  for (const engine of [
    '',
    'embeddings',
    'llamacpp decision',
    'llamacpp-',
    '@qvac/',
    '@other/embed-llamacpp'
  ]) {
    const result = schema.safeParse({ ...model, engine })
    t.absent(result.success, engine)
    t.ok(result.error.issues.some((issue) => issue.path.includes('engine')))
  }
})
