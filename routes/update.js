const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    return res.status(200).send(req.file);
});

module.exports = router;
