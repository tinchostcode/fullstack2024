import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import router from './routes/routes.js'

const app = express() 

dotenv.config()

 app.use(express.json())
 app.use("/api/products",router)

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