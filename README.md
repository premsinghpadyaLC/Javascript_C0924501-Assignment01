# Full Stack JavaScript - First Assignment: User Management CRUD App

### Author:
Premsingh Padya (C0924501)

---

## Description

This is a CRUD web application for managing user data using Node.js, Express, and MongoDB Atlas.  
The application manages user data including:
- User Last Name
- First Name
- Date of Birth
- Address1
- Address2
- City
- Postal Code
- Country
- Phone Number
- Email
- User Notes

The data is collected using web forms that send POST HTTP requests.  
The application features three main pages:
- **Add Data Page**: A form to add a new user.
- **Update Data Page**: A form to edit and delete existing users.
- **Display Data Page**: A table displaying all user data.

---

## Technologies Used

- **Node.js** with **Express** for the backend.
- **MongoDB Atlas** for the database.
- **Mongoose** as the ODM.
- **PUG** for templating.
- **W3CSS** for styling.

---

## How to Set Up and Use the App

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB Atlas account with a cluster created and IP access enabled (`0.0.0.0/0` for development).
- Git (optional, for cloning the repository).

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd fullstack-crud
