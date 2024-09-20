import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
const app = express() 

dotenv.config()
 

app.get("/hello",(req,res)=>{
    res.send("Hola :D")
})

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI

/*
})*/


const start = async ()=>{
    try {
        await connectDB(MONGO_URI)
        console.log("¡Conectado a MongoDB!")
        app.listen(PORT, () => {
            console.log(`Server Running  http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}
start()