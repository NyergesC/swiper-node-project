const express = require("express");
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');


const app = express();

app.use(fileUpload())

/* INDEX FILE KISZOLGÁLÁSA */

app.get('/', (req,resp,next)=>{   
    resp.sendFile(path.join(`${__dirname}/../frontend/index.html`));
})

/* TOBBI MAPPA LÁTHATÓSÁGA */

app.use('/public', express.static(`${__dirname}/../frontend/public/`));

/* PORT */

const port = 9000;

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`);
})