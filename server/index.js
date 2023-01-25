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
const multer = require('multer');
const express = require('express');
const app = express();

const upload = multer({
    dest: './uploads/'
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({file: req.file });
})
app.listen(3344, () => console.log("Running on 3344..."));