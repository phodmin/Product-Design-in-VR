/*****************************************
* INDEX.JS: Main Entry Point for Backend *
******************************************/

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fileUpload = require('./routes/api/upload');

const app = express();

/**************
* MIDDLEWARE *
***************/
//Enable Cross Origin Resource Sharing (CORS) Requests
app.use(cors());

/*********
* ROUTES *
**********/
//Backend Index
app.get('/', (req, res) => {
    res.send('Welcome to the RealView API');
});

//Single Upload
app.use('/api/upload', fileUpload);

/**************
* PORT CONFIG *
***************/
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));