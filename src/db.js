const mongoose = require('mongoose')

const connectToDB = (url = 'mongodb://localhost/parking') => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectToDB
