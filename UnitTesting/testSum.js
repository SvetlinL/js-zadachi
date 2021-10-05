const {expect} = require('chai');
const sum = require('./SumOfNumbers');

describe('Sum Checker', ()=>{
    it('returns correct sum ', ()=>{
        expect(sum([1,1,1,1])).to.be.equal(4);
    });
    it('returns correct sum if args are not numbers', ()=>{
        expect(sum(['1','1','1','1'])).to.be.equal(4);
    });
    it('returns NaN if args are not numbers', ()=>{
        expect(sum(['d','c','b','a'])).to.be.NaN;
    });
});