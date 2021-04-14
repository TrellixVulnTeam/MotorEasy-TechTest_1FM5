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
    Tyre.find()
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
        brand: brand
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



