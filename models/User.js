// Import mongoose to create schema
const mongoose = require('mongoose');

// Create a new schema for user data with all required fields
const userSchema = new mongoose.Schema({
    firstName: String,   // User's first name
    lastName: String,    // User's last name
    dob: Date,           // Date of birth
    address1: String,    // Primary address
    address2: String,    // Secondary address (optional)
    city: String,        // City
    postalCode: String,  // Postal/ZIP code
    country: String,     // Country
    phone: String,       // Phone number
    email: String,       // Email address
    notes: String        // Additional user notes
});

// Export the model so it can be used in other parts of the application
module.exports = mongoose.model('User', userSchema);
