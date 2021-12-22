const readInputFile = (req, res, next) => {
    res.status(200).json({
        message: "File is Reading"
    });
}

module.exports = {
    readInputFile
}