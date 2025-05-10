import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import routerUser from './routes/users.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = await connectDB();
app.locals.db = db;

app.use(routerUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
})

export default app;