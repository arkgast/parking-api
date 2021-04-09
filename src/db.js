const mongoose = require('mongoose')

const connectToDB = (
  url = 'mongodb://admin:admin@mongodb/parking?authSource=admin'
) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectToDB
