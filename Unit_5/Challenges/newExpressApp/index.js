const express = require('express');
const app = express();
const PORT = 4000;

//* Imports
const booksController = require(`./controllers/books.controller`);
const { getTimeStamp } = require('./utils/timestamp');


//*Middleware
app.use(express.json()); //Access to JSON
app.use(getTimeStamp);


//* Controller
app.use('/books', booksController);




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //Provides us feedback that it is running.
    
}) 

