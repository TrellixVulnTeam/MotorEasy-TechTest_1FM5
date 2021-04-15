import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config.js"
import cors from 'cors'
import { Tyre } from "./models/tyres.js"
import { Brand } from "./models/brands.js"

const app = express()
app.use(cors())
app.use(express.json())

// connect to mongodb, .env would normally not be in repo
const dbURI = process.env.MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3010)
    console.log("connected to db")
}).catch((err) => console.log("err"))

// get all tyres from db
app.get('/tyres', (req, res) => {

    Tyre.find()
    .then((response) => {
        res.send(response)
    })
    .catch((err) => {
        console.log(res)
    })
})

// get all tyres paginated
app.get('/tyres/pages', (req, res) => {
    const pageSize = 9
    const page = parseInt(req.query.page || "0")
    let totalPages = 0

    //count amount of Tyre docs in DB
    Tyre.countDocuments().then((res) => {
       totalPages = res
    })
    
    .then(() => {
        //find all Tyre docs
        Tyre.find()
        //limit response to pageSize
        .limit(pageSize).skip(pageSize * page)
        //send back totalPages and tyres
        .then((result) => {
            res.send({
                totalPages: Math.ceil(totalPages / pageSize),
                result
             })
        })
        .catch((err) => {
            res.send(err)
        })
    })
})
    

//query db for all tyres by brand param
app.get('/tyres/:brand', (req, res) => {

    const brand = req.params.brand

    Tyre.find({
        brand: {"$regex": brand, "$options": "i"}
    }).then((result) => {
        res.send(result)
    })
})

//query db for all tyres with matching/partial matching title
app.get('/tyres/title/:title', (req, res) => {
    const title = req.params.title

    Tyre.find({
         title: {"$regex": title, "$options": "i"}
        
    }).then((result) => {
        res.send(result)
    })
})

//return all brands
app.get('/brands', (req, res) => {
     Brand.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
})



