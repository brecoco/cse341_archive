const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1.js');
 
app.get('/', lesson1Controller.everyoneRoute);

app.get('/thiago', lesson1Controller.thiagoRoute);


const port = 3000;
 
app.listen(process.env.PORT || port)
console.log('Web Server is listening at port ' + (process.env.PORT || port));







