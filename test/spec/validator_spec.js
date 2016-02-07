import {expect} from 'chai';

import validator from '../../src/app/util/validator';

describe('validator util', () => {

  it('it validates phone number', () => {
    expect(validator.isPhone('111-111-1111')).to.be.true;
    expect(validator.isPhone('1-111-111-1111')).to.be.true;
    expect(validator.isPhone('11-111-111-1111')).to.be.true;
    expect(validator.isPhone('(111) 111-1111')).to.be.true;
    expect(validator.isPhone('1(111) 111-1111')).to.be.true;
    expect(validator.isPhone('11(111) 111-1111')).to.be.true;
    expect(validator.isPhone('111 111 1111')).to.be.true;
    expect(validator.isPhone('1 111 111 1111')).to.be.true;
    expect(validator.isPhone('11 111 111 1111')).to.be.true;
    expect(validator.isPhone(111111111)).to.be.true;
    expect(validator.isPhone(1111111111)).to.be.true;
    expect(validator.isPhone(11111111111)).to.be.true;
    expect(validator.isPhone(111111111111)).to.be.true;
    expect(validator.isPhone({})).to.be.false;
    expect(validator.isPhone(undefined)).to.be.false;
    expect(validator.isPhone(null)).to.be.false;
    expect(validator.isPhone("")).to.be.false;
    expect(validator.isPhone(1)).to.be.false;
    expect(validator.isPhone(true)).to.be.false;
  });

  it('it validates password', () => {
    expect(validator.isPassword('111111')).to.be.true;
    expect(validator.isPassword('11111')).to.be.false;
    expect(validator.isPassword({})).to.be.false;
    expect(validator.isPassword(undefined)).to.be.false;
    expect(validator.isPassword(null)).to.be.false;
    expect(validator.isPassword("")).to.be.false;
    expect(validator.isPassword(1)).to.be.false;
    expect(validator.isPassword(true)).to.be.false;
  });

  it('it validates object type', () => {
    expect(validator.isObject({})).to.be.true;
    expect(validator.isObject(undefined)).to.be.false;
    expect(validator.isObject(null)).to.be.false;
    expect(validator.isObject("")).to.be.false;
    expect(validator.isObject(1)).to.be.false;
    expect(validator.isObject(true)).to.be.false;
  });

  it('it validates object type', () => {
    expect(validator.isObject({})).to.be.true;
    expect(validator.isObject(undefined)).to.be.false;
    expect(validator.isObject(null)).to.be.false;
    expect(validator.isObject("")).to.be.false;
    expect(validator.isObject(1)).to.be.false;
    expect(validator.isObject(true)).to.be.false;
  });

  it('it validates string type', () => {
    expect(validator.isString("")).to.be.true;
    expect(validator.isString(undefined)).to.be.false;
    expect(validator.isString(null)).to.be.false;
    expect(validator.isString({})).to.be.false;
    expect(validator.isString(1)).to.be.false;
    expect(validator.isString(true)).to.be.false;
    expect(validator.isString([])).to.be.false;
    expect(validator.isString(function(){})).to.be.false;
  });

  it('it validates boolean type', () => {
    expect(validator.isBoolean(true)).to.be.true;
    expect(validator.isBoolean(undefined)).to.be.false;
    expect(validator.isBoolean(null)).to.be.false;
    expect(validator.isBoolean("")).to.be.false;
    expect(validator.isBoolean(1)).to.be.false;
    expect(validator.isBoolean({})).to.be.false;
    expect(validator.isBoolean([])).to.be.false;
    expect(validator.isBoolean(function(){})).to.be.false;
  });

  it('it validates number type', () => {
    expect(validator.isNumber(1)).to.be.true;
    expect(validator.isNumber(undefined)).to.be.false;
    expect(validator.isNumber(null)).to.be.false;
    expect(validator.isNumber("")).to.be.false;
    expect(validator.isNumber({})).to.be.false;
    expect(validator.isNumber(true)).to.be.false;
    expect(validator.isNumber([])).to.be.false;
    expect(validator.isNumber(function(){})).to.be.false;
  });

  it('it validates array type', () => {
    expect(validator.isArray([])).to.be.true;
    expect(validator.isArray(undefined)).to.be.false;
    expect(validator.isArray(null)).to.be.false;
    expect(validator.isArray("")).to.be.false;
    expect(validator.isArray(1)).to.be.false;
    expect(validator.isArray(true)).to.be.false;
    expect(validator.isArray({})).to.be.false;
    expect(validator.isArray(function(){})).to.be.false;
  });

  it('it validates function type', () => {
    expect(validator.isFunction(function(){})).to.be.true;
    expect(validator.isFunction(undefined)).to.be.false;
    expect(validator.isFunction(null)).to.be.false;
    expect(validator.isFunction("")).to.be.false;
    expect(validator.isFunction(1)).to.be.false;
    expect(validator.isFunction(true)).to.be.false;
    expect(validator.isFunction({})).to.be.false;
    expect(validator.isFunction([])).to.be.false;
  });



});


