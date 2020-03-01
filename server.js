const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;

app.use(express.static(path.join(__dirname + '/public')));
console.log('path: ' + path.join(__dirname, 'public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
