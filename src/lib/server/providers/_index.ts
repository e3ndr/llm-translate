import { env } from '$env/dynamic/private';

export async function loadProvider(): Promise<Provider> {
	switch (env.PROVIDER) {
		case 'ollama':
			return new (await import('./ollama')).OllamaProvider();

		default:
			throw new Error(`Unsupported provider: ${env.PROVIDER}`);
	}
}

export declare interface ConversationMessage {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

export declare interface ResponseChunk {
	content: string;
	totalTokens: number;
}

export abstract class Provider {
	abstract stream(
		signal: AbortSignal,
		model: string,
		messages: ConversationMessage[]
	): AsyncIterableIterator<ResponseChunk>;
}
