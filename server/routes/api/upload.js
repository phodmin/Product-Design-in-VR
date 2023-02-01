/**********************************************
* UPLOAD.JS: Uploads a file to uploads folder *
***********************************************/

const express = require("express");
const mongodb = require("mongodb");
const multer = require("multer");
const ERROR_FILE_TYPE = "Only glb files are allowed.";
const MAX_SIZE = 1024 * 1024 * 10; // MAX SIZE OF 100MB

const router = express.Router();

// Uploading to local disk to a destination and with a given filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/models/');
    },
    filename: (req, file, cb) => {
        cb(null, 'item.glb');
    }
})

// Uploaded file validation using multer, incl. logic for local storage, file size, and file type
const upload = multer({
    storage: storage,
    limits: {
        fileSize: MAX_SIZE
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.endsWith('.glb')) {
            const error = new Error("Wrong file type");
            error.code = "ERROR_FILE_TYPE";
            return cb(error, false);
        }
        cb(null, true);
    }
});

//Single Upload
router.post('/', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

//Error Handling (Must Come After POST Request)
router.use(function (err, req, res, next) {
    if (err.code === "ERROR_FILE_TYPE") {
        res.status(422).json({ error: "Only .glb files are allowed!" });
        return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json({ error: "Too large file." });
        return;
    }
});

module.exports = router;
