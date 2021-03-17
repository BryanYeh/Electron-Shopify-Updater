const express = require("express");
const router = express.Router();
const fs = require("fs");
const parse = require("csv-parse");

/* GET home page. */
router.get("/", function (req, res, next) {
  // Create the parser
  const parser = parse({columns: true,delimiter: "\t"}, function (err, records) {
	console.log(records);
});
  // Catch any error
  parser.on("error", function (err) {
    console.error(err.message);
  });
  fs.readdir('./uploads', (err, files) => {
    files.forEach(file => {
        fs.createReadStream('./uploads/'+file).pipe(parser);
    });
  });
  
  return res.status(200).send(req.file);
});

module.exports = router;
