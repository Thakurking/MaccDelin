// create-connection.js
const { createConnection } = require('mongoose');

// You create connections by calling this function and giving it the URL to the server
export function createConnections(url1, url2) {
  const db1 = await createConnection(url1);
  const db2 = await createConnection(url2);
  return {
    db1,
    db2
  }
}