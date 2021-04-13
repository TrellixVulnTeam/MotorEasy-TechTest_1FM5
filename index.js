import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config.js"
import cors from 'cors'
import { Tyre } from "./models/tyres.js"







const app = express()
app.use(cors())
app.use(express.json())

// connect to mongodb
const dbURI = process.env.MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3000)
    console.log("connected to db")
}).catch((err) => console.log("err"))

app.get('/tyres', (req, res) => {
    Tyre.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(console.log("error"))
    })
})

app.get('/add-tyre', (req, res) =>{
    const tyre = new Tyre({
        brand: 'Avon',
        title: 'Best tyre ever u dunknow',
        size: "34r, 56r, 5",
        price: 34.50
    })

    tyre.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err) => {
        console.log("Error")
    })
})


