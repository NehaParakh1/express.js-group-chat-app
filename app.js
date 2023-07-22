const express= require('express');
const bodyParser= require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

const loginRoute= require('./routes/login');
const chatRoute= require('./routes/chat');

app.use('/', loginRoute);
app.use('/', chatRoute);

app.use('/', (req, res,  next)=>{
    res.status(404).send("<h1>Page Not Found </h1>");
})

app.listen(3000);