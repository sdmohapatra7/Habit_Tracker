
const express = require('express');
const app = express();
const port = 5100;

const URL = require('./config/mongoose');

app.listen(port, (err)=>{
    if(err){
        console.log('Error While Server is Up And Running',err);
        return;
    }
    console.log('Server Is Up and Running On port',port);
});