Book Listing Platform
A platform where users can browse, search, and filter books based on titles, authors, and genres. Users can also request to exchange books with others.

Table of Contents
1. Features
2. Technologies Used
3. Setup Instructions
4. Environment Variables
5.Deployed URL


--------> Features:
User Registration and Login: Secure authentication with JWT.
Book Listing: Users can list books they own, along with the author, genre, and creator's name.
Search and Filter: Search books by title or author and filter them based on genre.
Send Request: Users can send a request to exchange books, with a notification using Toastify.
Responsive Design: The platform is designed to be responsive and user-friendly.

--------> Technologies Used
Frontend:

React.js
Tailwind CSS
React Toastify
Axios
Backend:

Node.js
Express.js
MongoDB


--------> Setup Instructions
Prerequisites
Node.js and npm installed
MongoDB server running

Backend Setup
Clone the repository:
https://github.com/Mridulians/book-listing-website

Navigate to the backend directory:
cd book-listings/back

Install the dependencies:
npm install

Create a .env file in the backend directory with the necessary environment variables (see below).
Start the server:
npm start

Frontend Setup
Navigate to the frontend directory:
cd book-listings/front
Install the dependencies:
npm install
Start the React development server:
npm start

--------> Environment Variables
Create a .env file in the backend directory and add the following variables:
makefile
PORT=5000
MONGO_URI='mongodb+srv://gmridul898:p9kvo8B4jXhMxXtg@cluster0.fvp6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


--------> Deployed Link
https://book-listing-mridul.netlify.app/
