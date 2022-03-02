
const urlMetadata = require('url-metadata')


const express = require('express');
const app = express();


// MiddleWare To parse the html request
app.use(express.json());

app.post('/scrape', (req, res) => {

    urlMetadata(req.body.url).then(
        function (metadata) {
            res.send(metadata);
        },
        function (error) {
            res.status(400).send(error);
        })
})


app.listen(3000, () => {
    console.log("Listening on port 3000!!")
})