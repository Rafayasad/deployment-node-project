const express = require('express');
const app = express();
const router = require('./routers/cars.js');
require('../src/db/conn.js');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router)

// for testing
// app.get('/',async(req,res)=>{
//     res.send('hello this is my first backend app');
// })
app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
})