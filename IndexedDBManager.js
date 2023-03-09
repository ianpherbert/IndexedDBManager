/*
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

To use the IndexedDBManager class, please include the above license notice in all copies or substantial portions of the software. The IndexedDBManager class provides a convenient way to manage data in IndexedDB databases, but please note that it is provided "as is" without any warranty, and the author is not liable for any damages or other liability arising from the use or distribution of the software.
*/

class IndexedDBManager {
  constructor(databaseName, storeName) {
    this.databaseName = databaseName;
    this.storeName = storeName;
    this.db = null;
    this.open = false;
  }

  static async indexedDBManagerBuilder(databaseName, storeName){
    const manager = new IndexedDBManager(databaseName, storeName);
    await manager.openDatabase();
    return manager;
  }

  async openDatabase() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.databaseName);

      request.onerror = () => {
        reject(new Error(`Failed to open database ${this.databaseName}`));
      };

      request.onsuccess = () => {
        this.db = request.result;
        this.open = true;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;

        if (!this.db.objectStoreNames.contains(this.storeName)) {
          this.db.createObjectStore(this.storeName, { keyPath: "id" , autoIncrement: true });
        }
      };
    });
  }

  async addRecord(record) {
    const transaction = this.db.transaction([this.storeName], "readwrite");
    const objectStore = transaction.objectStore(this.storeName);
    
    
    const request = objectStore.add(record);

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to add record ${record.id}`));
      };

      request.onsuccess = () => {
        record.id = request.result; // Update the record's ID with the auto-generated ID
        resolve(record.id);
      };
    });
  }

  async getRecord(id) {
    const transaction = this.db.transaction([this.storeName], "readonly");
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.get(id);

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to get record ${id}`));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async getAllRecords() {
    const transaction = this.db.transaction([this.storeName], "readonly");
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.getAll();

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to get all records`));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  async updateRecord(record) {
    const transaction = this.db.transaction([this.storeName], "readwrite");
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.put(record);

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to update record ${record.id}`));
      };

      request.onsuccess = () => {
        resolve(record.id);
      };
    });
  }

  async deleteRecord(id) {
    const transaction = this.db.transaction([this.storeName], "readwrite");
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.delete(id);

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to delete record ${id}`));
      };

      request.onsuccess = () => {
        resolve(id);
      };
    });
  }

  async clearStore() {
    const transaction = this.db.transaction([this.storeName], "readwrite");
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.clear();

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject(new Error(`Failed to clear store ${this.storeName}`));
      };

      request.onsuccess = () => {
        resolve();
      };
    })
}
}