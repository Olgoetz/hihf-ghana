export function getCurrentYear() {
  const today = new Date();
  const year: number = today.getFullYear();
  return year;
}
