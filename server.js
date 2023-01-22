
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import ProductRouter from './routes/ProductRouter.js';

dotenv.config();

const port =process.env.PORT || 8800;

const corsOptions = {
    origin: 'https://localhost:8080',
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json())

//--------- home/ default api testing ----------
app.get('/', (req, res) => {
    res.status(200).json("This is the Home API section and its working properly")
})

// ---------- routers -----------
app.use('/api/products', ProductRouter)


app.listen(port, ()=>{
    console.log(`the server is listening on ${port}`);
});
