import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from '../routes/index.js';
import models from '../models/index.js';

// This is called from the server.js file
const initalize = (app) => {
// cross origin 
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    mongoose.connect('mongodb+srv://bnb:cTLX6fP6dsT4PTp3@cluster0.jrbulsy.mongodb.net/?retryWrites=true&w=majority');
    registerRouter(app);
}


export default initalize;