
const updateStorage = (storageKey, value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

module.exports = updateStorage;
