/**
 * INDEX.JS: Main Entry Point for Backend
*/

const express = require('express');
const multer = require('multer');

const app = express();

const ERROR_FILE_TYPE = "Only glb files are allowed.";
const MAX_SIZE = 1024 * 1024 * 10; // 100MB

// Middleware - Error Codes
app.use(function(err, req, res, next) {
    if (err.code === "ERROR_FILE_TYPE") {
        res.status(422).json({ error: "Only .glb files are allowed!" });
        return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json({ error: "Too large file." });
        return;
    }
});

// Uploaded file validation using multer, incl. destination, file size, and file type
const upload = multer({
    dest: './uploads/',
    limits: {
        fileSize: MAX_SIZE
    },
    fileFilter: (req, file, cb) => {
        if(!file.originalname.endsWith('.glb')) {
            const error = new Error("Wrong file type");
            error.code = "ERROR_FILE_TYPE";
            return cb(error, false);
        }
        cb(null, true);
    }
});

//UPLOAD POST ROUTE
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

//PORT CONFIG
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));