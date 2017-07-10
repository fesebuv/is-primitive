'use strict';

var expect = require('chai').expect;
var isPrimitive = require('../src/is-primitive').isPrimitive;

describe('isPrimitive', function () {
  describe('should be primitive', function () {
    it('boolean', function () {
      expect(isPrimitive(true)).to.be.true;
    });

    it('number', function () {
      expect(isPrimitive(1)).to.be.true;
    });

    it('string', function () {
      expect(isPrimitive('a string')).to.be.true;
    });

    it('null', function () {
      expect(isPrimitive(null)).to.be.true;
    });

    it('undefined', function () {
      expect(isPrimitive(undefined)).to.be.true;
    });

    it('NaN', function () {
      expect(isPrimitive(NaN)).to.be.true;
    });

    it('Infinite', function () {
      expect(isPrimitive(Infinity)).to.be.true;
    });

    it('Symbol', function () {
      var sym = Symbol();
      expect(isPrimitive(Symbol.iterator)).to.be.true;
    });
  });

  describe('should NOT be primitive', function () {
    it('array', function () {
      expect(isPrimitive([undefined, null])).to.be.false;
    });

    it('object', function () {
      expect(isPrimitive({'a': undefined, 'b': null})).to.be.false;
    });

    it('function', function () {
      expect(isPrimitive(function () {})).to.be.false;
    });

    it('Date', function () {
      expect(isPrimitive(new Date())).to.be.false;
    });

    it('Error', function () {
      expect(isPrimitive(new Error('err'))).to.be.false;
    });
  });
});
