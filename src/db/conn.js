const mongoose = require('mongoose');

const uri = "mongodb+srv://rafay:Ca903IKryEbrc6Mi@cluster0.fl5o2qh.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB successfully!');
      // Your application logic goes here
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });

}

// mongoose.connect("mongodb://localhost:27017/pracdb")
//   .then(() => {
//     console.log('db connected successfully!');
//   }).catch((err) => {
//     console.log('error from db=>', err);
//   })

module.exports = connectDB;