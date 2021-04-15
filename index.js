import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config.js"
import cors from 'cors'
import { Tyre } from "./models/tyres.js"
import { Brand } from "./models/brands.js"







const app = express()
app.use(cors())
app.use(express.json())

// connect to mongodb
const dbURI = process.env.MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3010)
    console.log("connected to db")
}).catch((err) => console.log("err"))

app.get('/tyres', (req, res) => {
    const page = parseInt(req.query.page || "0")
    Tyre.find()
        .limit(9)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
})



app.get('/tyres/:brand', (req, res) => {

    const brand = req.params.brand

    Tyre.find({
        brand: {"$regex": brand, "$options": "i"}
    }).then((result) => {
        res.send(result)
    })
})


app.get('/tyres/title/:title', (req, res) => {
    const title = req.params.title

    Tyre.find({
         title: {"$regex": title, "$options": "i"}
        
    }).then((result) => {
        res.send(result)
    })
})


app.get('/brands', (req, res) => {
     Brand.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
})



