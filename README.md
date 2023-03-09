# IndexedDB Manager

This project provides a simple JavaScript class for managing data in IndexedDB databases.

## Installation

To use this library in your project, you can download the `indexedDBManager.js` file and include it in your HTML file using a script tag:
```
<script src="path/to/indexedDBManager.js"></script>
```
OR
```
<script src="https://ianpherbert.github.io/IndexedDBManager/IndexedDBManager.js"></script>
```

### Usage

```
const dbManager = new IndexedDBManager(databaseName, storeName);
await dbManager.openDatabase();
await dbManager.addRecord(record);
const allRecords = await dbManager.getAllRecords();
```

The IndexedDBManager class provides the following methods:

```
openDatabase(): Opens the database and creates the object store if it doesn't exist.
addRecord(record): Adds a new record to the object store.
getRecord(id): Retrieves a record from the object store by ID.
getAllRecords(): Retrieves all records from the object store.
updateRecord(record): Updates an existing record in the object store.
deleteRecord(id): Deletes a record from the object store by ID.
clearStore(): Deletes all records from the object store.
``` 

For more information on how to use the class, please refer to the documentation and examples.

### Contributing
Contributions are welcome! Please open an issue or a pull request if you have any suggestions or improvements.

### License
This project is licensed under the MIT License
