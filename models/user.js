const { Schema, model } = require('mongoose');
const bctypt = require('bcrypt');

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  avarar: String,
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  token: String    
},
  { versionKey: false, timestamps: true },
)

userSchema.pre('save', async function() {
  if (this.isNew)
    this.password = await bctypt.hash(this.password, 10)
})

userSchema.pre('updateOne', async function () {
  this.password = await bctypt.hash(this.password,10)
})

const User = model('user', userSchema)
module.exports = User