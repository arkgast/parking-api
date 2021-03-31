const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const userSchema = new mongoose.Schema(
  {
    id: {
      ...commonFieldAttrs,
      index: true,
      unique: true,
      required: true
    },
    firstName: {
      ...commonFieldAttrs,
      required: true
    },
    lastName: {
      ...commonFieldAttrs,
      required: true
    },
    phone: commonFieldAttrs,
    email: commonFieldAttrs,
    city: commonFieldAttrs
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)
