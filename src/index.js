const express = require('express');
const routes = require('./routes');
const cors = require('express');



const app = express();

app.use(cors());
app.use(express.json());

// rotaa
app.use(routes);

// ---------------

app.listen(3333);

 