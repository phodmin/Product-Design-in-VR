// INITIAL TRIALS OF BACKEND - UNUSED. 
// SEE BELOW TO SEE THE RIGHT CODE THAT IS BEING USED


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// //Middleware
// app.use(bodyParser.json());
// app.use(cors());

// //const upload = require("./routes/api/upload");
// const posts = require("./routes/api/posts");



// //app.use("/uploads", express.static("uploads"));
// //app.use("/upload", express.static("upload"));

// // app.post('/upload', (req, res) => {
// //     res.send(console.log("hello"));
// // });

// app.use("/api/posts", posts);

//const port = process.env.PORT || 5001;
//app.listen(5001, () => console.log(`Server started on port 5001`));


//--------------------------------------------------------------------------------
// CORRECT CODE STARTS HERE
const express = require('express');
const multer = require('multer');

const app = express();

const ERROR_FILE_TYPE = "Only glb files are allowed.";
const MAX_SIZE = 1024 * 1024 * 10; // 100 MB
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

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// Middleware for error
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

app.listen(3344, () => console.log("Running on 3344..."));