'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: { type: String },
    password: { type: String },
    againPassword: { type: String },
    mobile: { type: String },
  }, {
    collection: 'users',
  });

  return mongoose.model('User', UserSchema);
};
