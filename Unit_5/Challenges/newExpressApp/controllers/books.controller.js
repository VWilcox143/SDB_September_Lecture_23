const router = require("express").Router();
const db = require(`../data.json`);

const errorHandling = (res, err) => {
  return res.status(500).json({
    error: err.message,
});
}

router.get("/", (req, res) => {
  //Request all
  try {
    res.status(200).json({
      results: db,
      timestamp: req.timeStamp,
    });
    console.log(db);
  } catch (err) {
    // res.status(500).json({
    //   error: err.message,
    // });
    errorHandling(res, err)
  }
});

router.get("/find/:id", (req, res) => {
  //Request by ID

  try {
    let { id } = req.params;
    let results = db.filter((i) => i.id == id);

    console.log(results);
    if(results.length !== 0){
    res.status(200).json({
      results: results[0],
      timestamp: req.timeStamp,
    });
  } else {
    throw new Error('No Book')
}
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.get("/query", (req, res) => {
  //Query by title

  try {
    
      const {title} = req.query;

      let results = db.filter(i => i.title.toLowerCase() == title.toLowerCase());
      
        if(results.length > 0){
        res.status(200).json({
          results: results[0],
          timestamp: req.timeStamp,
          
        });
      } else {
        throw new Error('Title not found')
      }
    
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  try {
  const { title, author } = req.body;

  res.status(200).json({ 
    title: title, 
    author: author, 
    timestamp: req.timeStamp
  });
} catch (err) {
  res.status(500).json({
    error: err.message,
})
};
});

module.exports = router;
