function save(key, value) {
  try {
    const localStorageValue = JSON.stringify(value);
    localStorage.setItem(key, localStorageValue);
  } catch (er) {
    console.error(er);
  }
}

function load(key) {
  try {
    const localStorageData = localStorage.getItem(key);
    return localStorageData === null ? undefined : JSON.parse(localStorageData);
  } catch (er) {
    console.error(er);
  }
}

export { save, load };
