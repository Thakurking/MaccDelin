// // create-connection.js
// const { createConnection } = require("mongoose");

// // You create connections by calling this function and giving it the URL to the server
// const createConnections = (url1, url2) => {
//   const db1 = createConnection(url1, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//     .then((conn) => {
//       console.log(conn);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   const db2 = createConnection(url2, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//     .then((conn) => {
//       console.log(conn);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return {
//     db1,
//     db2,
//   };
// };

// module.exports = createConnections;
  