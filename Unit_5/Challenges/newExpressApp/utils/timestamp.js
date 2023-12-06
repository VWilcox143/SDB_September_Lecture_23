function getTimeStamp(req, res, next) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${formattedHours}:${formattedMinutes}`;

    
    req.timeStamp = time;
    console.log(`Time posted:`, req.timeStamp);
    
    next();
}

module.exports = {
    getTimeStamp: getTimeStamp,
};