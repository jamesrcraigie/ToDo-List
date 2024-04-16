const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('wwwroot'));
app.set('view engine', 'ejs');

// OPTIONAL - header setup to allow cross origin
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// OPTIONAL - allows for json request bodies to be mapped to a model
// app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render(path.join(__dirname, 'views/example'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});