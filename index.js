//- Header: Project Information and Author Details
// Full Stack JavaScript - First Assignment
// Author: Premsingh Padya (C0924501)
// Description: A CRUD web application for managing user data using Node.js, Express, and MongoDB
// This project provides functionalities to add, update, display, and delete user information

// Load environment variables from .env file (Ensure .env contains MONGO_URI)
require('dotenv').config();

// Importing required modules for the application
const express = require('express');        // Express framework to handle HTTP requests
const mongoose = require('mongoose');      // Mongoose ORM to interact with MongoDB
const bodyParser = require('body-parser'); // Middleware to parse incoming HTTP request bodies
const path = require('path');              // Module to handle file paths for static files

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming form data (URL-encoded) from web forms
app.use(bodyParser.urlencoded({ extended: true }));

// Setting PUG as the templating engine for rendering views
app.set('view engine', 'pug');
// Defining the path to the 'views' folder for PUG templates
app.set('views', path.join(__dirname, 'views'));

// Check if MONGO_URI is available before attempting to connect
if (!process.env.MONGO_URI) {
    console.error("❌ ERROR: Missing MONGO_URI in .env file");
    process.exit(1); // Exit process with failure code
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => {
        console.error("❌ MongoDB Connection Failed:", err);
        process.exit(1); // Exit process if DB connection fails
    });

// Importing and using the routes defined in the 'userRoutes' module
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);  // Routes for handling user data operations (add, update, delete, display)

// Define the port to listen on from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
