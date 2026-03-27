export function getWordCount(str: string): number {
	const trimmedStr = str.trim();

	if (trimmedStr.length === 0) {
		return 0;
	}

	return trimmedStr.split(/\s+/).length;
}
