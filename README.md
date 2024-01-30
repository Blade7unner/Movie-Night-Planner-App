# Movie Night Planner

## User Story

As a user, I want to easily plan a movie night with friends, including choosing movies, scheduling, and sending invitations, so that I can organize a fun and stress-free movie night.

## Description

The "Movie Night Planner" is a web application that simplifies the process of planning movie events. Users can select films, set dates, and send out invites. The app integrates modern technologies such as Node.js and Express.js, and utilizes the OMDb API for comprehensive film information.

## Features

- **Movie Selection**: Browse and pick from a wide range of movies.
- **Event Scheduling**: Choose optimal dates and times for movie nights.
- **Digital Invitations**: Send out custom invites to friends via email.
- **Responsive Design**: Seamless experience across various devices.

## Technologies

- **Frontend**: Handlebars.js for dynamic HTML rendering.
- **Backend**: Node.js and Express.js for server-side logic.
- **Database**: MySQL with Sequelize ORM for data management.
- **Authentication**: Express-session for session handling, and cookies for authentication.
- **API Integration**: OMDb API for movie information.
- **Notification Services**: Nodemailer for email notifications.
- **Deployment**: Heroku for hosting the application.

## Installation

To install and run this application on your local machine, follow these steps:

1. Clone the repository to your local machine: git clone https://github.com/Blade7unner/Movie-Night-Planner-App.git

2. Navigate to the repository directory: cd Movie-Night-Planner-App

3. Install the necessary dependencies: npm install

4. Set up your environment variables by creating a `.env` file in the root directory of the project. Use this template:

   ```plaintext
   # Database configuration
   DB_NAME='your_database_name'          # The name of the MySQL database you want to use
   DB_USER='your_database_username'      # Your MySQL username
   DB_PASS='your_database_password'      # Your MySQL password
   
5. Create the database using the schema file in the `db` directory

6. Seed the database with initial data if provided: npm run seed

7. Start the server: npm start


Now the application should be running on `http://localhost:3000` (or another port specified in your environment).


## Distribution of Tasks

- Felipe / Sarahy: Front-end design.
- David / Javier: Back-end server logic.


