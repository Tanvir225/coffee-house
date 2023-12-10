const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors');
const port = process.env.PORT  || 5000

//middleware
app.use(cors())
app.use(express.json())

//test api
app.get('/', (req, res) => {
    res.send('welcome to coffee - house server')
})




const uri = "mongodb+srv://tanvirrehman200:1pelrofgfOF568ZD@cluster0.ljq2tzl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //connect to database
    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffeeCollection");

    //get all coffee
    app.get("/coffees",async(req,res)=>{
        const cursor = coffeeCollection.find()
        const result = await cursor.toArray();
        res.send(result)
    })


    //get a single coffee
    app.get("/coffees/:id",async(req,res)=>{
        const id = req.params.id
        const query  = {_id : new ObjectId(id)}
        const result = await coffeeCollection.findOne(query)
        res.send(result)
    })


    //post a new coffee
    app.post("/coffees",async(req,res)=>{
        const coffee = req.body
        console.log('post api hitting',coffee);
        const result = await coffeeCollection.insertOne(coffee)
        res.send(result)
    })


    //delete a coffee
    app.delete("/coffees/:id",async(req,res)=>{
        const id = req.params.id
        const coffee = req.body
        console.log('delete api hitting',id);
        const query = {_id : new ObjectId(id)}
        const result = await coffeeCollection.deleteOne(query)
        res.send(result)
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  
  
  
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }



}


run().catch(console.dir);




//listen
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})