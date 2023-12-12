const router = require('express').Router();
const User = require('../models/user.model');

router.post("/signup", async (req, res) => {
    try{

        // Create a new object based off the Model Schema
        const user = new User ({
            // firstName: req.body.first
            firstName: req.body.first ? req.body.first : 'Please Update First Name',
            //lastName: req.body.last,
            lastName: req.body.last ? req.body.last : "Please Update Last Name",
            email: req.body.email,
            password: req.body.password
        });

        const newUser = await user.save(); 
        // writes to database. Returns a response - why we need an "await".

        res.status(200).json({
            user: newUser,
            message: 'Success! User Created.'
        });
        
    } catch (err){
        res.status(500).json({
            error: err.message,
        })
}
})

module.exports = router;