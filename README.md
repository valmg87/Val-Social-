# Social Network"

## Description.

Social Network is a Node.js app that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models. The API is built using Node.js and Mongoose.

## Table of Contents:
- [The Challenge](#The-Challenge)
- [Useage Instructions](#Useage-Instructions)
- [Built With](#Built-With)
- [Demo Video](#Demo)
- [Continued Development](#Continued-Development)

## The Challenge:

The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and must provide endpoints that can handle large amounts of unstructured data.

## Assigned User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria:
```GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage Instructions:
1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create a .env file in the root directory of the project and add the following variables:
3. Once the server is running, use a tool like Insomnia to test the API endpoints. 
4. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

## Demo Video:
[GitHub Repository:](https://github.com/ThomasCalle/Thomas-NoSQL-Social-Network-API)

## Built With:
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Insomnia: [by Kong](https://insomnia.rest/)
- MongoDB: [Website](https://www.mongodb.com/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)


