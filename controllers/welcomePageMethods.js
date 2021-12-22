const XLSX = require("xlsx");

const readInputFile = (req, res, next) => {
  let fileName;
  let workbook;
  let sheet_name_list;

  if (!req.file) {
    return res.json({
      errors: {
        message: "file cant be empty",
      },
    });
  } else {
    fileName = req.file.path;
    workbook = XLSX.readFile(fileName);
    sheet_name_list = workbook.SheetNames;
    return res.json({
      json: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]),
    });
  }
};

module.exports = {
  readInputFile,
};
