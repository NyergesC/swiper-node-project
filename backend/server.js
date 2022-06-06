const express = require("express");
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');


const app = express();

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


app.delete("/delete/:id", (req, res) => {
	let newJsonData = [];
	jsonData.forEach((element) => {
		if (element.id.toString() === req.params.id) {
			console.log(element);
			const removePath = __dirname + "/../frontend/img/" + element.filename;
			console.log(removePath);
			try {
				fs.unlinkSync(removePath);
			} catch (err) {
				console.error(err);
			}
		} else {
			newJsonData.push(element);
		}
	});

	fs.writeFile(
		`${pathToFrontend}/data.json`,
		JSON.stringify(newJsonData),
		(error) => {
			if (error) {
				console.log(error);
			}
		}
	);
	jsonData = newJsonData;

	res.sendStatus(200);
});


 
/* PORT */

const port = 9000;

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`);
})