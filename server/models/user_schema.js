const { Schema, model } = require('mongoose'),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    age: {
      type: Number,
      required: [true, 'age field is required'],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

//Apply the passport-localmongoose module as a plugin to the user schema.
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = model('users', userSchema);
