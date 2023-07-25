const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pracdb")
.then(()=>{
    console.log('db connected successfully!');
}).catch((err)=>{
    console.log('error from db=>',err);
})