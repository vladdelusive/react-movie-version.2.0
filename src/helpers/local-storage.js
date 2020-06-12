export function getLocalStorage(name) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(name));
    if (data === null) return null;
  } catch {
    data = false
  }
  return data;
}
