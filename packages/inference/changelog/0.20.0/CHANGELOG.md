# Changelog v0.20.0

Release Date: 2026-09-17

## ✨ Features

- Run an advisory llama.cpp fit check before loadModel. (see PR [#4010](https://github.com/tetherto/qvac/pull/4010))
- Add TranslatePsy-AfriSLM translation support. (see PR [#4342](https://github.com/tetherto/qvac/pull/4342))
- Report the iOS per-process memory allowance. (see PR [#4359](https://github.com/tetherto/qvac/pull/4359))
- Integrate diffusion layer streaming in the SDK. (see PR [#4389](https://github.com/tetherto/qvac/pull/4389)) - See [breaking changes](./breaking.md)
- Run llama fit in-process on mobile. (see PR [#4415](https://github.com/tetherto/qvac/pull/4415))
- Run the in-process llama fit on a worker thread. (see PR [#4509](https://github.com/tetherto/qvac/pull/4509))

## 🔌 API

- Add deleteCache({ auto: true }) to reclaim automatic KV caches. (see PR [#4248](https://github.com/tetherto/qvac/pull/4248)) - See [API changes](./api.md)
- Pass prompt-processing throughput through completion stats. (see PR [#4295](https://github.com/tetherto/qvac/pull/4295)) - See [API changes](./api.md)
- Integrate MiniMax-H3 video generation across inference and SDK. (see PR [#4351](https://github.com/tetherto/qvac/pull/4351)) - See [API changes](./api.md)
- Refuse from the computed floor when no calibration applies. (see PR [#4358](https://github.com/tetherto/qvac/pull/4358)) - See [API changes](./api.md)
- Adopt @qvac/audiogen-ggml 0.4.0 and expose the rest of its surface. (see PR [#4406](https://github.com/tetherto/qvac/pull/4406)) - See [API changes](./api.md)
- Close the SDK gaps against @qvac/tts-ggml 0.8.x. (see PR [#4414](https://github.com/tetherto/qvac/pull/4414)) - See [API changes](./api.md)
- Update @qvac/tts-ggml to 0.9.1. (see PR [#4428](https://github.com/tetherto/qvac/pull/4428)) - See [API changes](./api.md)
- Expose the TurboVec vector index on the SDK. (see PR [#4457](https://github.com/tetherto/qvac/pull/4457)) - See [API changes](./api.md)
- Consume the llm-llamacpp 0.53.0 tool grammar in the SDK. (see PR [#4476](https://github.com/tetherto/qvac/pull/4476)) - See [API changes](./api.md)

## 🐞 Fixes

- Derive diffusion VAE export names from the type tag. (see PR [#4234](https://github.com/tetherto/qvac/pull/4234)) - See [breaking changes](./breaking.md)
- Honour the caller's system message when kvCache is enabled. (see PR [#4404](https://github.com/tetherto/qvac/pull/4404)) - See [breaking changes](./breaking.md)
- Persist KV-cache saved-message boundary across worker restart. (see PR [#4418](https://github.com/tetherto/qvac/pull/4418))
- Keep the committed KV-cache file when a warm turn is cancelled or fails. (see PR [#4419](https://github.com/tetherto/qvac/pull/4419))
- Integrate Fabric 10549.1.0 consumers in SDK. (see PR [#4439](https://github.com/tetherto/qvac/pull/4439)) - See [breaking changes](./breaking.md)
- Load an addon's logger when its model loads, not when its plugin registers. (see PR [#4459](https://github.com/tetherto/qvac/pull/4459))

## 📦 Models

- Add Nemotron SDK support. (see PR [#4357](https://github.com/tetherto/qvac/pull/4357)) - See [API changes](./api.md), [model changes](./models.md)
  Added: PARAKEET_NEMOTRON_0_6B_F16, PARAKEET_NEMOTRON_0_6B_Q4_0, PARAKEET_NEMOTRON_0_6B_Q8_0
- Regenerate SDK and AI SDK provider model catalogs. (see PR [#4384](https://github.com/tetherto/qvac/pull/4384)) - See [model changes](./models.md)
  Added: TRANSLATEPSY_AFRISLM_0_8B_TRANSLATION_Q4_K_M, TRANSLATEPSY_AFRISLM_0_8B_TRANSLATION_Q8_0, TRANSLATEPSY_AFRISLM_2B_TRANSLATION_Q4_K_M, TRANSLATEPSY_AFRISLM_2B_TRANSLATION_Q8_0, TRANSLATEPSY_AFRISLM_4B_TRANSLATION_Q4_K_M (and 4 more)

## 🧹 Chores

- Unify agent configuration. (see PR [#4353](https://github.com/tetherto/qvac/pull/4353))
- Bump @qvac/rag to ^0.8.1. (see PR [#4367](https://github.com/tetherto/qvac/pull/4367))
- Update @qvac/decoder-audio to 0.6.0. (see PR [#4436](https://github.com/tetherto/qvac/pull/4436))
- Update @qvac/bci-whispercpp to 0.9.1. (see PR [#4437](https://github.com/tetherto/qvac/pull/4437))
