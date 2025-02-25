 Full Stack JavaScript - First Assignment: User Management CRUD App  

 Author:  
Premsingh Padya (C0924501)  

---

 Description  

This is a CRUD web application for managing user data using Node.js, Express, and MongoDB Atlas.  
The application allows users to create, read, update, and delete (CRUD) user records.  

 Features:  
- Add User: Enter user details and save them in MongoDB Atlas.  
- View Users: Display all stored user records in a table format in index.pug.  
- Edit User: Update existing user details.  
- Delete User: Remove a user from the database.  
- Additionally created header and footer and included them in index, add, edit pages

 Fields Managed:  
- First Name  
- Last Name  
- Date of Birth  
- Address 1  
- Address 2 (Optional)  
- City  
- Postal Code  
- Country  
- Phone Number  
- Email  
- Additional Notes  

---

 Technologies Used  

- Node.js - Backend server  
- Express.js - Web framework  
- MongoDB Atlas - Cloud-based NoSQL database  
- Mongoose - MongoDB ODM for schema definition  
- PUG - Template engine for frontend views  
- W3CSS - Styling framework  

---

 Setup Instructions  

 Prerequisites  
- Installed [Node.js](https://nodejs.org/) (LTS version recommended).  
- Created a MongoDB Atlas account and set up a free cluster.  
- Enabled IP Access List to `0.0.0.0/0` (for development).  
- Installed Git (optional, for cloning the repository).  

 Steps Completed  

 1️⃣ Cloning the Repository  
I navigated to my working directory in Command Prompt (`cmd`) and ran:  

```bash
git clone https://github.com/premsinghpadyaLC/Javascript_C0924501-Assignment01.git fullstack-crud
cd fullstack-crud
```  

This created a new directory `fullstack-crud` with the project files.  

 2️⃣ Initializing Git and Setting Remote Repository  
Inside the `fullstack-crud` folder, I initialized Git and set the remote repository:  

```bash
git init
git remote add origin https://github.com/premsinghpadyaLC/Javascript_C0924501-Assignment01.git
```  

 3️⃣ Installing Dependencies  
To install all required packages, I ran:  

```bash
npm install
```  
This installed Express.js, Mongoose, dotenv, PUG, and other dependencies.  


 4️⃣ Configuring Environment Variables  
I created a `.env` file inside the project root and added:  


MONGO_URI=mongodb+srv://premsinghpadyalc:Prem%40944110@cluster0.zl6mg.mongodb.net/fullstack_CRUD?retryWrites=true&w=majority
PORT=3000

- MONGO_URI: Connection string for MongoDB Atlas.  
- PORT=3000: Port for running the application.  

 5️⃣ Running the Application  
To start the server, I ran:  

```bash
npm start
```  
Alternatively, for development mode with nodemon:  
```bash

npm run dev

```  

 6️⃣ Accessing the Application  
I opened a web browser and visited:  

[http://localhost:3000]

This displayed the User Management System homepage.  

 7️⃣ Git Commit and Push  
After making changes, I committed and pushed my updates:  

```bash
git add .
git commit -m "Initial commit for Full Stack JavaScript - First Assignment"
git push -u origin master
```  

---

 API Endpoints & Routes  

| HTTP Method | Endpoint | Description |  
|-------------|----------|-------------|  
| GET | `/` | Index or Home page - Displays all users |  
| GET | `/add` | Add user form |  
| POST | `/add` | Submits new user data to MongoDB |  
| GET | `/edit/:id` | Load the edit user form |  
| POST | `/update/:id` | Update existing user data |  
| GET | `/delete/:id` | Delete a user from MongoDB |  

---

 Screenshots  

 Home Page (Display Users)  
![Home Page (index.pug)](public/image.png) 

 Add User Form  
![Add User](public/image-1.png)  
![Add User](public/image-2.png)

 Edit User Form  
![Edit User](public/image-3.png) 
![Edit User](public/image-4.png)

 Delete User
![Delete User](public/image-5.png)
---

 Troubleshooting  

 MongoDB Connection Error  
- Ensured the `MONGO_URI` in the `.env` file is correct.  
- Verified that your MongoDB Atlas IP Access List allows `0.0.0.0/0`.  

```bash
git remote -v
```  
If it was missing, I re-added it:  
```bash
git remote add origin https://github.com/premsinghpadyaLC/Javascript_C0924501-Assignment01.git
```  
Then, I tried pushing again:  
```bash
git push -u origin master
```  

---

 Project Checklist ✅  

✔️ Did Setup Node.js and Express  
✔️ Connected to MongoDB Atlas  
✔️ Created User Schema (Mongoose)  
✔️ Built CRUD Routes  
✔️ Implemented PUG Views  
✔️ Added Form Validations  
✔️ Applied Basic Styling (W3CSS)  
✔️ Tested and Debuged Errors  
✔️ Prepared Documentation (README + Screenshots)  


   Link:
   
   mongodb+srv://premsinghpadyalc:Prem%40944110@cluster0.zl6mg.mongodb.net/fullstack_CRUD?retryWrites=true&w=majority

   Note: here I user %40 for @ in my password

Thank you