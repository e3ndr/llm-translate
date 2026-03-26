import type { PageLoad } from './$types';
import { getMetadata } from '$lib/client/api';

export const load = (async ({ fetch }) => {
	return {
		metadata: await getMetadata(fetch)
	};
}) satisfies PageLoad;
