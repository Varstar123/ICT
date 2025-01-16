require('./connection');

//imported express
const express = require('express');
const emp = require('./models/employee')

//initialise express
const app = express()

//create api
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/trial', (req, res) => {
    res.send("This is a trial server")
})

//mid
app.use(express.json())

//Add Api
app.post("/add", async (req, res) => {
    try {
        await emp(req.body).save()
        res.send({message: "Data Added"})
    }
    catch (error) {
        console.log(error)
    }
})

app.get("/view", async (req, res) => {
    try {
        const employee = await emp.find()
        res.send(employee)
    }
    catch (error) {
        console.log(error)
    }
})
app.delete("/remove/:id", async (req, res) => {
    try {
        await emp.findByIdAndDelete(req.params.id)
        res.send({ message: "Data Deleted"  })
    }
    catch (error) {
        console.log(error)
    }
})

app.listen(3011, () => {
    console.log("port is running on 3007")
})  //port is running on 3007