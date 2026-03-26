import { env } from '$env/dynamic/private';
import { consumeNDJSON } from '$lib/ndjson';
import { Provider, type ConversationMessage } from './_index';

export class OllamaProvider extends Provider {
	async *stream(
		model: string,
		messages: ConversationMessage[]
	): AsyncIterableIterator<ConversationMessage> {
		const body = {
			model: model,
			messages: messages,
			stream: true,
			think: false
		};

		const response = await fetch(`${env.OLLAMA_ENDPOINT}/api/chat`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.OLLAMA_AUTH}`
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Ollama API error: ${response.status} ${response.statusText} - ${errorText}`);
		}

		for await (const obj of consumeNDJSON(response)) {
			if (obj.message && obj.message.content) {
				yield {
					role: 'assistant',
					content: obj.message.content
				};
			}
		}
	}
}
