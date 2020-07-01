export function convertAge(dateString: string): string {
  if (!dateString) return "";
  const today = new Date();
  const birthDate = new Date(dateString);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${dateString} (${age} years old)`;
}
