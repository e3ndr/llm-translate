import { loadModel, Model } from '$lib/server/models/_index';
import { loadProvider, Provider } from '$lib/server/providers/_index';
import { ndjsonResponse } from '$lib/ndjson';
import type { RequestHandler } from './$types';

let cachedModel: Model | null = null;
let cachedProvider: Provider | null = null;

export const GET: RequestHandler = async () => {
	if (!cachedModel) {
		cachedModel = await loadModel();
	}
	if (!cachedProvider) {
		cachedProvider = await loadProvider();
	}

	const response = {
		supportedLanguages: cachedModel!.supportedLanguages,
		autodetectSourceLanguage: cachedModel!.autodetectSourceLanguage
	};

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'
		}
	});
};

export const POST: RequestHandler = async ({ request }) => {
	if (!cachedModel) {
		cachedModel = await loadModel();
	}
	if (!cachedProvider) {
		cachedProvider = await loadProvider();
	}

	const { from, to, text } = await request.json();

	return ndjsonResponse(async (send) => {
		for await (const token of cachedModel!.translate(cachedProvider!, from, to, text)) {
			send({ content: token });
		}
	});
};
