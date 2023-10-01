import { Db, MongoClient } from "mongodb";
let client: MongoClient;
const dbUtils = () => {
  const url = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;
  let db: Db;
  const getDbOptionsErrors = () => {
    let errorMessage = "";
    if (!url) {
      errorMessage += "MONGODB_URI not defined.\n";
    }
    if (!dbName) {
      errorMessage += "DB_NAME not defined.\n";
    }
    return errorMessage;
  };
  const getDB = async () => {
    const dbOptionErrors = getDbOptionsErrors();
    if (dbOptionErrors) {
      throw dbOptionErrors;
    }

    if (!db) {
      console.log("Initializing mongo");
      client = new MongoClient(url || "");
      db = client.db(dbName);
    }
    return db;
  };

  return { getDB };
};
export default dbUtils;
