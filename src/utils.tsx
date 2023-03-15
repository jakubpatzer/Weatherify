export function getDay(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en-us", { weekday: "short" }).toUpperCase();
}
