export function getLocalStorage(name) {
  try {
    let data = JSON.parse(localStorage.getItem(name));
    if (data === null) return null;
    return data;
  } catch(e) {
    console.log(e)
  }
}
