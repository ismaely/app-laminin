const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const saltos = 10;

const consulatorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }

});

consulatorSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltos, (err, hashedPassword) =>{
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

consulatorSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('tbl_consultor', consulatorSchema)