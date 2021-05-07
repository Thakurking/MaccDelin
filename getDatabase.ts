// import { createConnections } from "./create-connection";
const createConnections = require("./create-connection");
import { adminSchema } from "./admin-service/models/admin.model";
import { editorSchema } from "./editor-service/models/editor.model";
let db: any;

export function getDatabase(): Promise<any> {
  if (this.db) return Promise.resolve(db);
  return createDatabases();
}

async function createDatabases() {
  const { db1, db2 } = await createConnections(
    "mongodb://localhost/MaccDelin-Admin",
    "mongodb://localhost/MaccDelin-Editor"
  );
  const AdminModel = db1.model("admin", adminSchema);
  const EditorModel = db2.model("editor", editorSchema);
  db = {
    AdminModel,
    EditorModel,
    connections: {
      db1,
      db2,
    },
  };
  return db;
}
