const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

//MongoDB configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const username = encodeURIComponent("devhimanshuu");
const password = encodeURIComponent("Himanshu@143");
const uri = `mongodb+srv://${username}:${password}@bookish.swvl74n.mongodb.net/?retryWrites=true&w=majority&appName=Bookish`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Create a collection of documents
    const bookCollections = client.db("BookInventory").collection("Books");

    //Insert book to the database: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const results = await bookCollections.insertOne(data);
      res.send(results);
    });

    //Get all books from database
    // app.get("/all-books", async (req, res) => {
    //   const books = bookCollections.find();
    //   const results = await books.toArray();
    //   res.send(results);
    // });

    //Update a book data : patch or update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const updateBookData = req.body;

      const filter = { _id: new ObjectId(id) };

      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      //update
      const results = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(results);
    });

    //Delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const results = await bookCollections.deleteOne(filter);
      res.send(results);
    });

    //Find by Category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const results = await bookCollections.find(query).toArray();
      res.send(results);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
