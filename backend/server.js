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

app.use('/pub', express.static(`${__dirname}/../frontend/public/`));


/* IMAGE DATAJSON ENDPOINT */


app.get("/image-list", (req,res)=>{
    res.sendFile(path.join(`${__dirname}/../frontend/data.json`))
})

/* READ FILE */
const dataLocation = path.join(`${__dirname}/../frontend/`);

let jsonData = []
    try {
        let data = fs.readFileSync(`${dataLocation}data.json`, (err) =>{
                if(err){
                    console.log(err);
                }

        })

      jsonData = JSON.parse(data) 
        
    } catch (err) {
        console.log(err);        
    }

/* POST */

 app.post('/', (req, res) => {
    const picture = req.files.picture;
    const formData = req.body
    formData.filename = picture.name
    jsonData.push(formData)

    fs.writeFile(`${dataLocation}data.json`, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log(err);
        }
    })

    const uploads = path.join(`${__dirname}/../frontend/public/img/`);
    if(picture) {
        console.log(uploads + picture.name);
        picture.mv(uploads + picture.name)
    }

    res.send(formData)
})

 
/* PORT */

const port = 9000;

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`);
})