# llm-translate

A simple translation tool that uses large language models to provide accurate and natural translations.

## Features

- Streaming responses for faster translations
- Support for a wide range of languages
- Easy deployment with Docker Compose
- Configurable models and providers

## Models and Providers

| **Provider**                 | [`translategemma`](https://ollama.com/library/translategemma) | _Any model_† |
| ---------------------------- | ------------------------------------------------------------- | ------------ |
| [Ollama](https://ollama.com) | ✅                                                            | ✅           |

| **Provider** | Streaming |
| ------------ | --------- |
| Ollama       | ✅        |

| **Model**        | Automatic source detection |
| ---------------- | -------------------------- |
| `translategemma` | ❌                         |
| _Any model_†     | ✅                         |

† Any model that can perform translation tasks effectively. For best results, use models that are fine-tuned for translation or have strong multilingual capabilities and are small enough to run efficiently on your hardware. Personally, I've had good results with [gemma3n](https://ollama.com/library/gemma3n).

## Deployment

### Docker Compose

```yaml
services:
  llm-translate:
    image: ghcr.io/e3ndr/llm-translate:latest
    ports:
      - '3000:3000'
    environment:
      PUBLIC_SITENAME: 'LLM-Translate' # You can customize the <title> of the web interface
      MODEL: 'translategemma:27b'
      PROVIDER: 'ollama'
      OLLAMA_ENDPOINT: 'http://ollama-address:11434'
      OLLAMA_AUTH: 'none' # Or your API key if using authentication
```

## Development

I would like to validate models and fine-tune prompts for better translation quality.

If you have any suggestions for models, prompts, or features, please open an issue!

If you are opening a pullrequest with a new model or provider, please also include a sample prompt and response to demonstrate its capabilities. You can base your changes off of `/src/lib/server/models/generic.ts` and `/src/lib/server/providers/ollama.ts` for a reference implementation. Be sure to also update `_index.ts` in those folders to handle your new model or provider.
