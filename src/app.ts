import "dotenv/config";
import express, { json } from 'express';
import cors from 'cors';
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
db().then(() => console.log('Conexion Ready'))
app.listen(PORT, () => {
    console.log(`Iniciando en el puero: ${PORT}`);
})
