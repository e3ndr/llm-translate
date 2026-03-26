import type { LanguageCode } from '$lib/languages';
import { consumeNDJSON } from '$lib/ndjson';

interface TranslateMetadata {
	supportedLanguages: LanguageCode[];
	autodetectSourceLanguage: boolean;
}

export async function getMetadata(fetchFn = fetch): Promise<TranslateMetadata> {
	return await (await fetchFn('/api/translate')).json();
}

export async function* translate(
	from: LanguageCode,
	to: LanguageCode,
	text: string,
	fetchFn = fetch
): AsyncIterableIterator<string> {
	const res = await fetchFn('/api/translate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ from, to, text })
	});

	if (!res.ok || !res.body) {
		throw new Error(`Translation request failed: ${res.status} ${res.statusText}`);
	}

	for await (const obj of consumeNDJSON(res)) {
		if (obj.content) {
			yield obj.content;
		}
	}
}
