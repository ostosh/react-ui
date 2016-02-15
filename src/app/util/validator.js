import validator from 'validator';

//string validation

validator.isPhone = function (val) {
  val = ''+val;
  let match = val.match(/\d/g);
  if(match)
    return match.length >= 9 && match.length <= 12;
  return false;
};

validator.isPassword = function (val) {
  val = ''+val;
  let match = val.match(/\d/g);//TODO
  if(match)
    return match.length >= 6 && match.length <= 20;
  return false;
};

//type validation

validator.isObject = function (obj) {
  return obj instanceof Object;
};

validator.isString = function (val) {
  return typeof val === 'string';
};

validator.isBoolean = function (val) {
  return typeof val === 'boolean';
};

validator.isNumber = function (val) {
  return typeof val === 'number';
};

validator.isArray = function (arr) {
  return arr instanceof Array;
};

validator.isFunction = function (fn) {
  return fn instanceof Function;
};

export default validator;     

