export async function* consumeNDJSON(response: Response): AsyncIterableIterator<any> {
	if (!response.body) {
		throw new Error('Response body is null (streaming not supported?)');
	}

	const reader = response.body.getReader();
	const decoder = new TextDecoder();

	let buffer = '';

	while (true) {
		const { value, done } = await reader.read();
		if (done) break;

		// Decode chunk (streaming mode keeps partial UTF-8 chars safe)
		buffer += decoder.decode(value, { stream: true });

		let newlineIndex;
		while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
			const line = buffer.slice(0, newlineIndex).trim();
			buffer = buffer.slice(newlineIndex + 1);

			if (line.length === 0) continue;

			try {
				const parsed = JSON.parse(line);
				yield parsed;
			} catch (err) {
				console.error('Failed to parse NDJSON line:', line, err);
			}
		}
	}

	// Flush remaining buffer (last line may not end with newline)
	buffer += decoder.decode(); // flush decoder

	const finalLine = buffer.trim();
	if (finalLine.length > 0) {
		try {
			const parsed = JSON.parse(finalLine);
			yield parsed;
		} catch (err) {
			console.error('Failed to parse final NDJSON line:', finalLine, err);
		}
	}
}

export function ndjsonResponse(
	producer: (send: (obj: any) => void | Promise<void>) => Promise<void>
): Response {
	const encoder = new TextEncoder();

	const stream = new ReadableStream({
		async start(controller) {
			try {
				// helper to send one object
				const send = (obj: any) => {
					const line = JSON.stringify(obj) + '\n';
					controller.enqueue(encoder.encode(line));
				};

				// let user push data
				await producer(send);

				controller.close();
			} catch (err) {
				controller.error(err);
			}
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'application/x-ndjson',
			'Cache-Control': 'no-cache',
			Connection: 'keep-alive'
		}
	});
}
