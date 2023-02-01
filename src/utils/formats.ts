
export function truncateText(text: string, limit: number) {
  const truncatedText = text.substring(0, limit);
  return truncatedText + (text.length > limit ? "..." : "");
}

export const numberFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});