const router = require('express').Router();
const db = require(`../data.json`);



router.get('/', (req, res) => { //Request all
    try {

        res.status(200).json({
            results:db
            
        })
        console.log(db);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})


router.get('/find/:id',(req, res) => { //Request by ID
    

    

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

router.get('/query', (req,res) => { //Query by title
    
    try { 
        if (title){
        const {title} = req.query;    
        if (title) {
            console.log(title)
                res.status(200).json({
                    results: results[0].title
                                    })
                    } else {
                        throw new Error("Unable to find this novel.")
                    }
} 
    } catch (err) {
        res.status(500).json({
            error: err.message
        }) 
    }
})

module.exports = router;