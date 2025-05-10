import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://mongo:27017/employees';

mongoose.connect(mongoURI,{
}).then(db => console.log('DB is connected') ).catch(err =>console.error(err))