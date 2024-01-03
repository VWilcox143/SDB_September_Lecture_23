function logTime(req,res,next) {
    console.log(next);

    let time = new Date();
    req.timePosted = time.toLocaleTimeString();
    console.log(`DatePosted: `, req.timePosted);
    next();
    
}
logTime();
module.exports = {
   logTime: logTime, 
}

