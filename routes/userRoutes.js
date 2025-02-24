// Importing Express and creating a new router for routing the requests
const express = require('express');
const router = express.Router();

// Importing the User model to interact with the MongoDB database
const User = require('../models/User');

// Helper function: Checking if the provided date is in the past
function isDateInPast(dateString) {
    const submittedDate = new Date(dateString);
    const today = new Date();
    // Removing the time portion for comparison
    today.setHours(0, 0, 0, 0);
    return submittedDate < today;
}

// Handling GET request for '/' - Displaying all users
router.get('/', async (req, res) => {
    try {
        // Retrieving all users from the database
        const users = await User.find();
        // Rendering the 'index' view and passing the users data for display
        res.render('index', { users });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Handling GET request for '/add' - Displaying the form for adding a new user
router.get('/add', (req, res) => {
    // Rendering the 'add' view which contains the form for adding a new user
    res.render('add');
});

// Handling POST request for '/add' - Processing form data and creating a new user
router.post('/add', async (req, res) => {
    try {
        const { email, firstName, phone, dob } = req.body;

        // Validating Date of Birth: Ensuring it is in the past
        if (!isDateInPast(dob)) {
            return res.status(400).send("Date of Birth must be before today.");
        }

        // Checking if the provided email already exists in the database
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).send("Email already exists. Please use a different email.");
        }

        // Checking if the provided first name already exists (if this is desired behavior)
        const existingFirstName = await User.findOne({ firstName });
        if (existingFirstName) {
            return res.status(400).send("First Name already exists. Please use a different first name.");
        }

        // Checking if the provided phone number already exists in the database
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).send("Phone number already exists. Please use a different phone number.");
        }

        // Creating a new user document using the form data (req.body)
        await User.create(req.body);

        // Redirecting back to the homepage after successful user creation
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Handling GET request for '/edit/:id' - Displaying the form for editing an existing user
router.get('/edit/:id', async (req, res) => {
    try {
        // Finding the user by their unique ID (passed as a URL parameter)
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Rendering the 'edit' view and passing the user data for pre-filling the form
        res.render('edit', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Handling POST request for '/edit/:id' - Updating the user data after the form submission
router.post('/edit/:id', async (req, res) => {
    try {
        const { email, firstName, phone, dob } = req.body;

        // Validating Date of Birth: Ensuring it is in the past
        if (!isDateInPast(dob)) {
            return res.status(400).send("Date of Birth must be before today.");
        }

        // Checking if the provided email already exists, excluding the current user (to allow updating email)
        const existingEmail = await User.findOne({ email, _id: { $ne: req.params.id } });
        if (existingEmail) {
            return res.status(400).send("Email already exists. Please use a different email.");
        }

        // Checking if the provided first name already exists, excluding the current user
        const existingFirstName = await User.findOne({ firstName, _id: { $ne: req.params.id } });
        if (existingFirstName) {
            return res.status(400).send("First Name already exists. Please use a different first name.");
        }

        // Checking if the provided phone number already exists, excluding the current user
        const existingPhone = await User.findOne({ phone, _id: { $ne: req.params.id } });
        if (existingPhone) {
            return res.status(400).send("Phone number already exists. Please use a different phone number.");
        }

        // Updating the user document with the new data from the form (req.body)
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Redirecting back to the homepage after successful update
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Handling POST request for '/delete/:id' - Deleting a user
router.post('/delete/:id', async (req, res) => {
    try {
        // Deleting the user document matching the provided ID
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Redirecting back to the homepage after successful deletion
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Exporting the router to use it in the main application (index.js)
module.exports = router;
