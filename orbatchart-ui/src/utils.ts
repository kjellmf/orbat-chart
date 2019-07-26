export function getEnumMap(myEnum) {
  return Object.entries(myEnum).map(([key, value]) => {
    return { text: key, value }
  });
}
