const { MongoClient } = require("mongodb");

const url = "mongodb+srv://Aditya28:Aditya%402813@cluster0.c94uc.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  //read
  const data = {
    FirstName: "Aashi",
    LastName: "Singh",
    City: "Delhi",
    PhoneNumber: "8851575218",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  // the following code examples can be pasted here...
  //Read

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/** CRUD
 * create
 * Read
 * Update
 * Delete
 */
