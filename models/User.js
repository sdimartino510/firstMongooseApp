const { Schema, model } = require('mongoose');
const { isEmail, isLength } = require('validator');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [
      true,
      'Error: Email address is required'
    ],
    validate: [
      isEmail,
      'Error: Please enter a valid email address'
    ]
  },
  password: {
    type: String,
    required: [
      true,
      'Error: Password is required'
    ],
    validate: [
      (value) => isLength(value, { min: 6 }),
      'Error: Password must be at least 6 characters long'
    ]
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema);