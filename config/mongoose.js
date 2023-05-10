const mongoose = require('mongoose');

const URL = 'mongodb+srv://sdmohapatra7:shakti@habit.8hrleue.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URL)
.then(()=>console.log('MongoDb Is Up and Connected'))
.catch((err)=>console.log('Error connected To MongoDb',err));