export function getLocalStorage(name) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(name));
  } catch {
    data = null
  }
  return data;
}
