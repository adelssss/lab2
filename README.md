# Todo list

## Description
The application allows users to add, update and delete tasks. Each task can be marked as completed. The user interface is built using HTML, CSS and JavaScript.
## Features
- Create new tasks
- Retrieve all tasks
- Fetch a single task by ID
- Update existing tasks status
- Delete tasks

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Axios (for HTTP requests)
- HTML/CSS for the frontend

  ### File Description

- index.html: The main HTML file of the application containing markup for displaying the task list.
- style.css: The style file responsible for the appearance of the application.
- app.js: A JavaScript file containing client logic for working with the API and interacting with the server.
- task.js: A task data model that defines the structure of a document in MongoDB.
- index.js: The main server file that handles routes and database interaction.

## Installation

### Prerequisites
- Node.js installed on your machine
- MongoDB server running

### Steps to Set Up
1. Initialize project
2. Install npm packages:
-npm i express
-npm i mongoose
-npm install --save-dev nodemon
4. Install  MongoDB database
5. Connect MongoDB database with Express.js:
-Create a index.js
-Set connection with database
6. Create folder structure
-Create task.js file inside models folder
-Create index.html, app.js, style.css file inside  public folder
7. Install Postman:
-sign in
8. POST task into MongoDB
9. GET all blogs data from MongoDB
10. Get a single blog task from MongoDB
11. UPDATE tasks status from MongoDB
12. DELETE task from MongoDB
13. API will be available at :
http://localhost:3000
## API Endpoints
-Create a task post
Endpoint:(http://localhost:3000)
Requested body:
{
  "task": "Wash a dishes"
}
Response:
Success (201): Returns the newly created task object.
Error (400):
Returns a message indicating "Task content cannot be empty" if the task name is not provided.
Returns a message indicating "Task already exists in the database" if the task already exists.
Error (500): Returns an error message indicating "Internal server error" if there's a problem during task creation.


-Get all tasks posts
Endpoint:(http://localhost:3000/get)
Response:
Success (200): Returns a JSON array of all task objects.
Error (500): Returns an error message indicating "Internal server error" if there's an issue fetching tasks.

-Get a single task post using ID
Endpoint:(http://localhost:3000/get/ID)
Response:
Success (200): Returns the task object that matches the given ID.
Error (404): Returns an error message indicating "Task not found" if the task ID does not match any existing tasks.
Error (500): Returns an error message indicating "Internal server error" if there's an issue during retrieval.

-Update a task post
Endpoint:(http://localhost:3000/update/ID)
Requested body: {
  "task": "Go to dthe dance class"
}
Response:
Error (404): Returns an error message indicating "Task not found" if the task ID does not match any existing tasks.
Error (500): Returns an error message indicating "Internal server error" if there's an issue during the update.

-Delete a task post:
Endpoint:(http://localhost:3000/delete/ID)
Response:
Success (200): Returns a JSON object with a message indicating "Task deleted successfully".
Error (404): Returns an error message indicating "Task not found" if the task ID does not match any existing tasks.
Error (500): Returns an error message indicating "Internal server error" if there's an issue during deletion.
## Testing
-You can manually test the API using Postman and check the changes in MongoDB or using URL http://localhost:3000 see your changes on the site .
