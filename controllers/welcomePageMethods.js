let XLSX = require("xlsx");

const readInputFile = (req, res, next) => {
    
    const fileLocation = req.body.fileLocation;
    console.log(fileLocation);
    res.status(200).json({
        message: "File is Reading"
    });
}

module.exports = {
    readInputFile
}