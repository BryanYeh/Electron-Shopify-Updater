const express = require('express');
const router = express.Router();
const multer = require('multer')
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.post('/', upload.single('file'), function(req, res, next) {
    if (!req.file.mimetype.startsWith('application/vnd.ms-excel')) {
        fs.unlink(req.file.path, (err) => {
            if (err) throw err;
            console.log("File is deleted.");
        });
        return res.status(422).json({
          error :'The uploaded file must csv'
        });
    }
    return res.status(200).send(req.file);
});

module.exports = router;
