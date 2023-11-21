// Import necessary modules and middleware
import cors from 'cors';
import express from 'express';
import registerRouter from './routes/index.js';
import mongoose from 'mongoose';
import models from './models/index.js';
// Initialize Express app
const initialize = (app) =>
{
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    // Connect to MongoDB database
    mongoose.connect('mongodb+srv://muvvahasini:sweety17@webd.6slwcql.mongodb.net/?retryWrites=true&w=majority')
    // Register API routes
    registerRouter(app);
}

export default initialize;