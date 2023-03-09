<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>IndexedDB Manager</title>
  </head>
  <body>
    <h1>IndexedDB Manager</h1>
    <p>This project provides a simple JavaScript class for managing data in IndexedDB databases.</p>
    <h2>Installation</h2>
    <p>To use this library in your project, you can download the <code>indexedDBManager.js</code> file and include it in your HTML file using a script tag:</p>
    <pre><code>&lt;script src="path/to/indexedDBManager.js"&gt;&lt;/script&gt;</code></pre>
    
    <p><strong>- OR -</strong></p>
        <pre><code>&lt;script src="https://ianpherbert.github.io/IndexedDBManager/IndexedDBManager.js"&gt;&lt;/script&gt;</code></pre>
    <h2>Usage</h2>
    <p>To use the <code>IndexedDBManager</code> class, you can create an instance of the class and use its methods to manage data in the database:</p>
    <pre><code>const dbManager = new IndexedDBManager(databaseName, storeName);
await dbManager.openDatabase();
await dbManager.addRecord(record);
const allRecords = await dbManager.getAllRecords();</code></pre>
    <p>The <code>IndexedDBManager</code> class provides the following methods:</p>
    <ul>
      <li><code>openDatabase()</code>: Opens the database and creates the object store if it doesn't exist.</li>
      <li><code>addRecord(record)</code>: Adds a new record to the object store.</li>
      <li><code>getRecord(id)</code>: Retrieves a record from the object store by ID.</li>
      <li><code>getAllRecords()</code>: Retrieves all records from the object store.</li>
      <li><code>updateRecord(record)</code>: Updates an existing record in the object store.</li>
      <li><code>deleteRecord(id)</code>: Deletes a record from the object store by ID.</li>
      <li><code>clearStore()</code>: Deletes all records from the object store.</li>
    </ul>
    <p>For more information on how to use the class, please refer to the documentation and examples.</p>
    <h2>Contributing</h2>
    <p>Please open an issue or a pull request if you have any suggestions or improvements.</p>
    <h2>License</h2>
    <p>This project is licensed under the MIT License</p>
   
  </body>
</html>
