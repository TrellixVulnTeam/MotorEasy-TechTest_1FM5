import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config.js"







const app = express()
app.use(express.json())

// connect to mongodb
const dbURI = process.env.MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3000)
    console.log("connected to db")
}).catch((err) => console.log("err"))


