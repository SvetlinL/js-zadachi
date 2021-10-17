const {expect} = require('chai');
const numberOperations = require('./NumberOperations');

describe('numberOperations checker', () => {
    describe('powNumber method testing', () => {
        it('returns correct result if input is positive int number', () => {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });
        it('returns correct result if input is negative int number', () => {
            expect(numberOperations.powNumber(-2)).to.be.equal(4);
        });
        it('returns correct result if input is positive float number', () => {
            expect(numberOperations.powNumber(2.5)).to.be.equal(6.25);
        });
        it('returns correct result if input is negative float number', () => {
            expect(numberOperations.powNumber(-2.5)).to.be.equal(6.25);
        });
        it('returns correct result if input is string number', () => {
            expect(numberOperations.powNumber('2')).to.be.equal(4);
        });
        it('returns correct result if number is 0', () => {
            expect(numberOperations.powNumber(0)).to.be.equal(0);
        });
    });
    describe('numberChecker method testing', () => {
        it('returns correct answer if input is positive int number lower than 100', () => {
            expect(numberOperations.numberChecker(5)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is negative int number lower than 100', () => {
            expect(numberOperations.numberChecker(-5)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is positive float number lower than 100', () => {
            expect(numberOperations.numberChecker(5.5)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is negative float number lower than 100', () => {
            expect(numberOperations.numberChecker(-5.5)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is positive int number greater than 100', () => {
            expect(numberOperations.numberChecker(105)).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is positive int number lower than 100', () => {
            expect(numberOperations.numberChecker(-105)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is positive float number greater than 100', () => {
            expect(numberOperations.numberChecker(105.5)).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is positive float number greater than 100', () => {
            expect(numberOperations.numberChecker(-105.5)).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is string number greater than 100', () => {
            expect(numberOperations.numberChecker('105')).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is string number lower than 100', () => {
            expect(numberOperations.numberChecker('5')).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is string number lower than 100', () => {
            expect(numberOperations.numberChecker('-150')).to.be.equal('The number is lower than 100!');
        });
        it('returns correct answer if input is int number == 100', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is string number 100', () => {
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is float number == 100.5', () => {
            expect(numberOperations.numberChecker(100.5)).to.be.equal('The number is greater or equal to 100!');
        });
        it('returns correct answer if input is string float number == 100.5', () => {
            expect(numberOperations.numberChecker('100.5')).to.be.equal('The number is greater or equal to 100!');
        });
        it('throws if input is not a number', () => {
            expect(numberOperations.numberChecker.bind('asdasda')).to.throw('The input is not a number!');
        });
    });
    describe('sumArrays method testing', () => {
        it('returns correct resultArr if input arrays are positive int numbers', () => {
            let resultArr= [2,2,2,2];
            expect(numberOperations.sumArrays([1, 1, 1, 1], [1, 1, 1, 1])).to.deep.equal(resultArr);
        });
        it('returns correct resultArr if input arrays are negative int numbers', () => {
            let resultArr= [-2,-2,-2,-2];
            expect(numberOperations.sumArrays([-1,-1,-1,-1], [-1,-1,-1,-1])).to.deep.equal(resultArr);
        });
        it('returns correct resultArr if input arrays are positive float numbers', () => {
            let resultArr= [3,3,3,3];
            expect(numberOperations.sumArrays([1.5, 1.5, 1.5, 1.5], [1.5, 1.5, 1.5, 1.5])).to.deep.equal(resultArr);
        });
        it('returns correct resultArr if input arrays are negative float numbers', () => {
            let resultArr= [-3,-3,-3,-3];
            expect(numberOperations.sumArrays([-1.5, -1.5, -1.5, -1.5], [-1.5, -1.5, -1.5, -1.5])).to.deep.equal(resultArr);
        });
        it('returns correct resultArr if input arrays are mixed int and float numbers', () => {
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
        });
        it('returns correct resultArr if input arrays are mixed int and float numbers', () => {
            expect(numberOperations.sumArrays([1,2,3], [1,2])).to.deep.equal([2,4,3]);
        });
        it('returns correct resultArr if input arrays are mixed int and float numbers', () => {
            expect(numberOperations.sumArrays([1,2], [1,2,3])).to.deep.equal([2,4,3]);
        });
    });
});