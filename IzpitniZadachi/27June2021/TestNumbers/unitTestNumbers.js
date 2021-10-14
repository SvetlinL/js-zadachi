const {expect} = require('chai');
const testNumbers = require('./testNumbers');

describe('testNumbers checker', ()=>{
   describe('sumNumbers method testing', ()=>{
      it('returns correct sum if params are int numbers',()=>{
         expect(testNumbers.sumNumbers(5,5)).to.be.equal('10.00');
      });
      it('returns correct sum if params are negative int numbers',()=>{
         expect(testNumbers.sumNumbers(-5,-5)).to.be.equal('-10.00');
      });
      it('returns correct sum if params are float numbers',()=>{
         expect(testNumbers.sumNumbers(5.0,5.0)).to.be.equal('10.00');
      });
      it('returns correct sum if params are negative float numbers',()=>{
         expect(testNumbers.sumNumbers(-5.0,-5.0)).to.be.equal('-10.00');
      });
      it('returns undefined if first param is not number',()=>{
         expect(testNumbers.sumNumbers('5',5)).to.be.undefined;
      });
      it('returns undefined if second param is not number',()=>{
         expect(testNumbers.sumNumbers(5,'5')).to.be.undefined;
      });
      it('returns undefined if both params are not number',()=>{
         expect(testNumbers.sumNumbers('5','5')).to.be.undefined;
      });
      it('returns undefined if both params are strings',()=>{
         expect(testNumbers.sumNumbers('asdasdasd','asdasad')).to.be.undefined;
      });
      it ('returns correct sum if one param is int and second is float',()=>{
         expect(testNumbers.sumNumbers(5,5.5)).to.be.equal('10.50');
      });
   });
   describe('numberChecker method testing',()=>{
      it ('returns correct if input is even number',()=>{
         expect(testNumbers.numberChecker(4)).to.be.equal('The number is even!');
      });
      it ('returns correct if input is negative even number',()=>{
         expect(testNumbers.numberChecker(-4)).to.be.equal('The number is even!');
      });
      it ('returns correct if input is odd number',()=>{
         expect(testNumbers.numberChecker(5)).to.be.equal('The number is odd!');
      });
      it ('returns correct if input is negative odd number',()=>{
         expect(testNumbers.numberChecker(-5)).to.be.equal('The number is odd!');
      });
      it('is parsed correctly if input is odd float number',()=>{
         expect(testNumbers.numberChecker(3.2)).to.be.equal('The number is odd!');
      });
      it('is parsed correctly if input is negative odd float number',()=>{
         expect(testNumbers.numberChecker(-3.2)).to.be.equal('The number is odd!');
      });
      it('is parsed correctly if input is even string number',()=>{
         expect(testNumbers.numberChecker('4')).to.be.equal('The number is even!');
      });
      it('is parsed correctly if input is odd string number',()=>{
         expect(testNumbers.numberChecker('5')).to.be.equal('The number is odd!');
      });
      it('throws when input is not a number',()=>{
         expect(testNumbers.numberChecker.bind('sadsad')).to.be.throw('The input is not a number!');
      });
   });
   describe('averageSumArray method testing',()=>{
      it ('returns correct result with positive int numbers',()=>{
         expect(testNumbers.averageSumArray([1,2,3,4,5])).to.be.equal(3);
      });
      it ('returns correct result with negative int numbers',()=>{
         expect(testNumbers.averageSumArray([-1,-2,-3,-4,-5])).to.be.equal(-3);
      });
      it ('returns correct result with positive float numbers',()=>{
         expect(testNumbers.averageSumArray([1.5,2.5,3.5,4.5,5.5])).to.be.equal(3.5);
      });
      it ('returns correct result with negative float numbers',()=>{
         expect(testNumbers.averageSumArray([-1.5,-2.5,-3.5,-4.5,-5.5])).to.be.equal(-3.5);
      });
      it ('returns correct result with float and int numbers',()=>{
         expect(testNumbers.averageSumArray([-1.5,2.5,-3.5,4.5,-5.5])).to.be.equal(-0.7);
      });
   });
});