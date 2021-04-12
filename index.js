import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

// connect to mongodb
const dbURI = "mongodb+srv://administrator:motoreasy123@cluster0.keb60.mongodb.net/car-parts?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3000)
    console.log("connected to db")
}).catch((err) => console.log("err"))


