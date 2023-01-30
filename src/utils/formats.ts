
export function truncateText(text: string, limit: number) {
  const truncatedText = text.substring(0, limit);
  return truncatedText + (text.length > limit ? "..." : "");
}