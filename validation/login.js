const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput
(data){
  let errors = {};

data.email = !isEmpty(data.email)? data.email : '';
data.password = !isEmpty(data.password)? data.password : '';



  if (!validator.isLength(data.password, {min: 6, max: 30})){errors.name ='Password must between 6 and 30 characters';
  }

  if (validator.isEmpty(data.email)){errors.name ='Email field is required';
  }

  if (validator.isEmpty(data.password)){errors.name ='Password field is required';
  }

  return {
  errors,
    isValid: isEmpty(errors)
  }
}