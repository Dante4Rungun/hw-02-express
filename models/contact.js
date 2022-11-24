const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
  name: {
    type: String,
    minLenght: 2,
    maxLenght: 30,
  },
  email: {
    type: String,
    minLenght: 6,
    maxLenght: 50,
  },
  phone: {
    type: String,
    minLenght: 10,
    maxLenght: 12,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
  }
},
  { versionKey: false, timestamps: true },
)

const Contact = model('contact', contactSchema)
module.exports = Contact