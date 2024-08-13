const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    //before - "mongoose": "^5.11.10"
    //after - npm i mongoose@latest
  });
};

module.exports = connectDB;
