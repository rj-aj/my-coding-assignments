const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

require('./server/config/mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended:true}));

app.use(bodyParser.json());

require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port: ${ port } `));