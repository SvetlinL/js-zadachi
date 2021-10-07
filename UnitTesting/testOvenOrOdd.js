const {expect} = require('chai');
const isOddOrEven = require('./EvenOrOdd');

describe('EvenOrOddChecker', ()=>{
   it('returns even for even length string', ()=>{
      expect(isOddOrEven('abcd')).to.equal('even');
   });
   it('returns odd for odd length string', ()=>{
      expect(isOddOrEven('abc')).to.equal('odd');
   });
   it('returns undefined if arg is not string', ()=>{
      expect(isOddOrEven(5)).to.be.undefined;
   });
});