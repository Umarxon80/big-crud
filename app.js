import express from "express"
import ConnectDB from "./database/mongo"
import { PORT } from "./config/dotenv.config"

const app=express()

app.use(express.json())




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})