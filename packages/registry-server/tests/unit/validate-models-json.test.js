'use strict'

const test = require('brittle')
const { createModelSchema } = require('../../scripts/validate-models-json')
const {
  engineToAddon,
  legacyEngineToCanonical,
  legacyRegistryEngineRules
} = require('../../../sdk/contract/model-type-maps.json')

const schema = createModelSchema(new Set(['MIT']))
const model = {
  source: 'https://huggingface.co/example/models/resolve/' + 'a'.repeat(40) + '/model.gguf',
  licenseId: 'MIT'
}

test('submissions accept every supported canonical engine and legacy identifier', (t) => {
  for (const engine of [...Object.keys(engineToAddon), ...Object.keys(legacyEngineToCanonical)]) {
    t.ok(schema.safeParse({ ...model, engine }).success, engine)
  }
  for (const [engine, rules] of Object.entries(legacyRegistryEngineRules)) {
    for (const rule of rules) {
      t.ok(schema.safeParse({ ...model, engine, tags: [rule.tag] }).success, engine)
    }
  }
})

test('submissions reject unsupported identities and ambiguous shared package ids', (t) => {
  for (const engine of [
    '',
    'embeddings',
    'llamacpp decision',
    'llamacpp-',
    '@qvac/',
    '@other/embed-llamacpp',
    'llamacpp-completon',
    'madeup-engine',
    '@qvac/not-a-plugin',
    'constructor',
    '__proto__',
    'toString',
    '@qvac/asr-ggml'
  ]) {
    const result = schema.safeParse({ ...model, engine })
    t.absent(result.success, engine)
    t.ok(result.error.issues.some((issue) => issue.path.includes('engine')))
  }
  t.absent(
    schema.safeParse({ ...model, engine: '@qvac/asr-ggml', tags: ['transcription'] }).success
  )
})

test('supported engines remain valid for every checked-in registry submission', (t) => {
  for (const name of ['prod', 'test']) {
    const rows = require(`../../data/models.${name}.json`)
    const rejected = rows.filter(
      (row) => !schema.safeParse({ ...model, engine: row.engine, tags: row.tags }).success
    )
    t.alike(rejected, [], `${name}: all ${rows.length} engine classifications remain valid`)
  }
})
