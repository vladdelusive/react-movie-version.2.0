export function setLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocalStorage(name) {
  let data = JSON.parse(localStorage.getItem(name));
  if (data === null) return null;
  return data;
}
