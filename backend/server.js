const express = require("express");
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const md5 = require('md5');

const app = express();
app.use(express.json())
app.use(fileUpload())

const pathToFrontend = path.join(`${__dirname}/../frontend`);

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
        
    } catch (error) {
        fs.writeFile(
            `${pathToFrontend}/data.json`,
            JSON.stringify(jsonData),
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        );
    }

const getFreeId = () => {
    let ids = [];
    jsonData.forEach((element) => {
        ids.push(parseInt(element.id))
    })
    return ids.length === 0 ? 0 : Math.max(...ids) + 1
}

/* POST */

 app.post('/', (req, res) => {
    const picture = req.files.picture;

    //UPLOAD DATA FROM INPUT FIELDS

    const formData = req.body
    formData.id = getFreeId();
    formData.filename = picture.name;
    formData['md5'] = md5(picture.data);
    formData['user'] = md5(req.body.email);

    jsonData.push(formData)


    fs.writeFile(`${dataLocation}data.json`, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log(err);
        }
    })

    //UPLOAD IMAGE

    const uploads = path.join(`${__dirname}/../frontend/public/img/`);
    if(picture) {
        console.log(uploads + picture.name);
        picture.mv(uploads + picture.name)
    }

    res.send(formData)
})


app.delete("/delete/:id", (req, res) => {
	let newJsonData = [];
	jsonData.forEach((element) => {

		if (element.id.toString() === req.params.id) {
			const removePath = __dirname + "/../frontend/public/img/" + element.filename;
			console.log(removePath);
			try {
				fs.unlinkSync(removePath);
                console.log("torolni probalom")
			} catch (err) {
				console.error(err);
			}
		} else {
			newJsonData.push(element);
		}
	});

    jsonData = newJsonData

    //OVERWRITE THE DATA.JSON WITH UPDATED ARRAY
	fs.writeFile(
		`${pathToFrontend}/data.json`,
		JSON.stringify(jsonData),
		(error) => {
			if (error) {
				console.log(error);
			}
		}
	);

	res.sendStatus(200);
});


 
/* PORT */

const port = 9000;

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`);
})