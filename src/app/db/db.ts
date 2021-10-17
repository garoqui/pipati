export const createDB = () => {
  const request = indexedDB.open("pipati_users", 1);
  let db;

  request.onupgradeneeded = function () {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("users", { keyPath: "nickname" });
    const nickNameIndex = store.createIndex("by_nickname", "nickname", {
      unique: true,
    });
    const pointsIndex = store.createIndex("by_poitns", "points");

    // Populate with initial data.
    store.put({ nickname: "PIPATI", points: "0" });
    store.put({ nickname: "ALEJO", points: "0" });
  };

  request.onsuccess = function () {
    db = request.result;
  };
};
