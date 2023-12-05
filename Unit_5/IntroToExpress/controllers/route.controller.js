const router = require('express').Router();
const db = require('../db.json');


/*
Quick challenge:
    - Frame a GET route
        - No endpoint is required to access. It will "Get All" based off /routes
            - note: Where is "/routes" coming from?

    No need to work through the logic within the code block.
*/
router.get('/', (req, res) => {
    try {

        res.status(200).json({
            results:db
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})


/*
    Syntax: 
        URL - /:id
            - Denotes a parameter value. Endpoint is expecting a reference value.


        Example URL with a parameter:
            http://localhost:4000/routes/1

        - "1" would reference a parameter or flexible string.
            - This could be a n ame of something or anything that we want.
*/
router.get('found-one/:id',(req, res) => { /* Wild card '*' won't work with this because this "get" meets requirements because ':ID' is a parameter. */
    console.log(req.params);

    /*
        - used to help us locate one item in our database
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several times. 
    */

    try {

        let { id } = req.params;
        let results = db.filter(i => i.id == id);

        console.log(results);

        res.status(200).json({
            results: results[0]
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})



router.get('/query', (req,res) => {
    /*
    -Anything after the endpoint can be extracted.
    ex: localhost:4000/routes/query/?firstname="John"
    */

    try {
    //console.log(req.query.firstname);
    const {firstName, lastName} = req.query;
    // multi query: localhost:4000/query/?firstName=John&lastName=Doe

    if (firstName && lastName) {
        console.log(firstName, lastName)
        res.status(200).json({
            results: {
                first: firstName,
                last: lastName,
                fullName: `${firstName} ${ lastName}`
            }
        })
    } else {
        throw new Error("Need to supply first and last names");
    }
    
    } catch (err) {
        res.status(500).json({
            error: err.message
        }) 
    }
})
router.get('*', (req, res) => {
    try {
        res.status(200).json({
            results: "wild card"
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }) 
    }
}) 
    /* See line 40*/

module.exports = router; 