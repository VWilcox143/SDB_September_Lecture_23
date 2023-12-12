require('dotenv').config(); // connects our .env file to our project
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // used from node_modules
//const PORT = 4000;
const PORT = process.env.PORT; // points to our env file and puts value of PORT from that variable into this PORT variable.
const MONGO = process.env.MONGODB; // connection variable from .env
const userController = require('./controllers/user.controller');



mongoose.connect(`${MONGO}/movies`);
// connection middleware. Establishes route and defining our collection which we are targeting. 
// doesn't display until there is a document within a collection.


const db = mongoose.connection; //event listener to check if connected.

db.once("open", () => console.log(`Connected to : ${MONGO}/movies`))

app.use(express.json());
app.use('/user', userController);

app.listen(PORT,() => console.log(`Movies: ${PORT}`));