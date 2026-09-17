# Changelog v0.20.0

Release Date: 2026-09-17

## ✨ Features

- Integrate diffusion layer streaming in the SDK. (see PR [#4389](https://github.com/tetherto/qvac/pull/4389)) - See [breaking changes](./breaking.md)
- Run llama fit in-process on mobile. (see PR [#4415](https://github.com/tetherto/qvac/pull/4415))
- Run the in-process llama fit on a worker thread. (see PR [#4509](https://github.com/tetherto/qvac/pull/4509))

## 🔌 API

- Integrate MiniMax-H3 video generation across inference and SDK. (see PR [#4351](https://github.com/tetherto/qvac/pull/4351)) - See [API changes](./api.md)
- Adopt @qvac/audiogen-ggml 0.4.0 and expose the rest of its surface. (see PR [#4406](https://github.com/tetherto/qvac/pull/4406)) - See [API changes](./api.md)
- Close the SDK gaps against @qvac/tts-ggml 0.8.x. (see PR [#4414](https://github.com/tetherto/qvac/pull/4414)) - See [API changes](./api.md)
- Update @qvac/tts-ggml to 0.9.1. (see PR [#4428](https://github.com/tetherto/qvac/pull/4428)) - See [API changes](./api.md)
- Expose the TurboVec vector index on the SDK. (see PR [#4457](https://github.com/tetherto/qvac/pull/4457)) - See [API changes](./api.md)
- Consume the llm-llamacpp 0.53.0 tool grammar in the SDK. (see PR [#4476](https://github.com/tetherto/qvac/pull/4476)) - See [API changes](./api.md)

## 🐞 Fixes

- Honour the caller's system message when kvCache is enabled. (see PR [#4404](https://github.com/tetherto/qvac/pull/4404)) - See [breaking changes](./breaking.md)
- Persist KV-cache saved-message boundary across worker restart. (see PR [#4418](https://github.com/tetherto/qvac/pull/4418))
- Keep the committed KV-cache file when a warm turn is cancelled or fails. (see PR [#4419](https://github.com/tetherto/qvac/pull/4419))
- Integrate Fabric 10549.1.0 consumers in SDK. (see PR [#4439](https://github.com/tetherto/qvac/pull/4439)) - See [breaking changes](./breaking.md)
- Load an addon's logger when its model loads, not when its plugin registers. (see PR [#4459](https://github.com/tetherto/qvac/pull/4459))

## 📦 Models

- Add Nemotron SDK support. (see PR [#4357](https://github.com/tetherto/qvac/pull/4357)) - See [API changes](./api.md), [model changes](./models.md)
  Added: PARAKEET_NEMOTRON_0_6B_F16, PARAKEET_NEMOTRON_0_6B_Q4_0, PARAKEET_NEMOTRON_0_6B_Q8_0

## 🧹 Chores

- Unify agent configuration. (see PR [#4353](https://github.com/tetherto/qvac/pull/4353))
- Update @qvac/decoder-audio to 0.6.0. (see PR [#4436](https://github.com/tetherto/qvac/pull/4436))
- Update @qvac/bci-whispercpp to 0.9.1. (see PR [#4437](https://github.com/tetherto/qvac/pull/4437))
