const {expect} = require('chai');
const lookupChar = require('./CharLookup');

describe('CharLookup Checker', ()=>{
   it('returns undefined if first param is not string and second is not a number', ()=>{
      expect(lookupChar(5,'asd')).to.be.undefined;
   });
   it('returns undefined if first param is wrong type', ()=>{
      expect(lookupChar(5,'0')).to.be.undefined;
   });
   it('returns undefined if string param is empty', ()=>{
      expect(lookupChar('','0')).to.be.undefined;
   });
   it('returns incorrect index if index is bigger than length', ()=>{
      expect(lookupChar('asd',5)).to.equal('Incorrect index');
   });
   it('returns incorrect index if index is negative number', ()=>{
      expect(lookupChar('asd',-5)).to.equal('Incorrect index');
   });
   it('returns undefined if index is floating point number', ()=>{
      expect(lookupChar('asd',1.5)).to.be.undefined;
   });
   it('returns correct character if both params are correct types', ()=>{
      expect(lookupChar('asdddd',1)).to.equal('s');
   });
});