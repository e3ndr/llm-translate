import { env } from '$env/dynamic/private';
import type { ConversationMessage, Provider } from '$lib/server/providers/_index';
import { ALL_LANGUAGES_MAPPED, LanguageCode } from '$lib/languages';
import { Model } from './_index';

export class GenericModel extends Model {
	readonly supportedLanguages = Object.keys(LanguageCode).map((code) => code as LanguageCode);

	readonly autodetectSourceLanguage = true;

	public async *translate(
		provider: Provider,
		from: LanguageCode,
		to: LanguageCode,
		text: string
	): AsyncIterableIterator<string> {
		const sourceLang = ALL_LANGUAGES_MAPPED[from];
		const targetLang = ALL_LANGUAGES_MAPPED[to];
		const model = env.MODEL!;

		let prompt;
		if (from == LanguageCode.auto) {
			prompt = `You are an expert-level ${targetLang.name} (${to}) translator.

Your task is to translate the following text into precise, idiomatic ${targetLang.name}.

Requirements:
- Preserve meaning, nuance, and tone exactly.
- Keep formatting, punctuation, and structure where possible.
- Do NOT summarize, paraphrase, or reinterpret.
- Do NOT add explanations, metadata, or commentary.
- If the input is already ${targetLang.name}, return it unchanged.
- If any part is ambiguous, choose the most contextually accurate translation without noting uncertainty.

Output:
- Return ONLY the translated text, nothing else.

${text}`;
		} else {
			prompt = `You are an expert-level ${sourceLang.name} (${from}) to ${targetLang.name} (${to}) translator.

Your task is to translate the following ${sourceLang.name} (${from}) text into precise, idiomatic ${targetLang.name}.

Requirements:
- Preserve meaning, nuance, and tone exactly.
- Keep formatting, punctuation, and structure where possible.
- Do NOT summarize, paraphrase, or reinterpret.
- Do NOT add explanations, metadata, or commentary.
- If the input is already ${targetLang.name}, return it unchanged.
- If any part is ambiguous, choose the most contextually accurate translation without noting uncertainty.

Output:
- Return ONLY the translated text, nothing else.

${text}`;
		}

		const messages: ConversationMessage[] = [
			{
				role: 'user',
				content: prompt
			}
		];

		for await (const message of provider.stream(model, messages)) {
			yield message.content;
		}
	}
}
