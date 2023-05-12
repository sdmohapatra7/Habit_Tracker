
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port || 5100;
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');

const URL = require('./config/mongoose');


app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log('Error While Server is Up And Running',err);
        return;
    }
    console.log('Server Is Up and Running On port',port);
});