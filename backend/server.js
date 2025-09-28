import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001

// middleware
app.use(cors({
    origin:"http://localhost:5173"
    }// you can just use origin() unless you want to specify which frontend
));
app.use(express.json());//this method will parse JSON bodies: req.body
app.use(rateLimiter);


//simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.mehtod} and Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes )

//connectDB(); this also works 

connectDB().then(() => { //this is better
    app.listen(PORT, () => {
    console.log("Hello from server 5001"

    )});
})