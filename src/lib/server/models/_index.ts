import { env } from '$env/dynamic/private';
import type { Provider } from '$lib/server/providers/_index';
import { LanguageCode } from '$lib/languages';

export async function loadModel(): Promise<Model> {
	if (env.MODEL!.startsWith('translategemma')) {
		return new (await import('./translategemma')).TranslateGemmaModel();
	}

	return new (await import('./generic')).GenericModel();
}

export abstract class Model {
	abstract readonly supportedLanguages: LanguageCode[];

	abstract readonly autodetectSourceLanguage: boolean;

	public abstract translate(
		provider: Provider,
		from: LanguageCode,
		to: LanguageCode,
		text: string
	): AsyncIterableIterator<string>;
}
