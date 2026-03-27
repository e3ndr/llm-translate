import { env } from '$env/dynamic/private';
import { consumeNDJSON } from '$lib/ndjson';
import { Provider, type ResponseChunk, type ConversationMessage } from './_index';

export class OllamaProvider extends Provider {
	async *stream(
		model: string,
		messages: ConversationMessage[]
	): AsyncIterableIterator<ResponseChunk> {
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

		let totalTokens = 0;

		for await (const obj of consumeNDJSON(response)) {
			if (!obj.message || typeof obj.message.content !== 'string') {
				continue; // Non-message
			}

			if (typeof obj.eval_count === 'number') {
				totalTokens = obj.eval_count; // We have the actual count!
			} else {
				totalTokens++; // Estimate as we go since Ollama doesn't provide a final count until the end.
			}

			yield {
				content: obj.message.content,
				totalTokens: totalTokens
			};
		}
	}
}
