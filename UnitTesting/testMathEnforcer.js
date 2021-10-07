const {expect} = require('chai');
const mathEnforcer = require('./MathEnforcer');

describe('MathEnforcer Checker', () => {
    describe('addFive method checker', () => {
        it('returns undefined if param is not a number', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
        });
        it('returns correct sum if param is positive number', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('returns correct sum if param is negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('returns correct sum if param is positive floating point number', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        });
        it('returns correct sum if param is negative floating point number', () => {
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
        });

    });
    describe('subtractTen method checker', () => {
        it('returns undefined if param is not a number', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
        });
        it('returns correct value if param is positive number', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it('returns correct value if param is negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('returns correct value if param is positive floating point number', () => {
            expect(mathEnforcer.subtractTen(5.5)).to.be.closeTo(-4.5, 0.01);
        });
        it('returns correct value if param is negative floating point number', () => {
            expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
        });

    });
    describe('sum method checker', () => {
        it('returns undefined if both params are not numbers', () => {
            expect(mathEnforcer.sum('a', 'b')).to.be.undefined;
        });
        it('returns undefined if first param is not a number', () => {
            expect(mathEnforcer.sum('a', 5)).to.be.undefined;
        });
        it('returns undefined if second param is not a number', () => {
            expect(mathEnforcer.sum(5, 'b')).to.be.undefined;
        });
        it('returns correct sum if both params are correct types', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        });
        it('returns correct sum if both params are negative numbers', () => {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });
        it('returns correct sum if first param is negative number', () => {
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
        });
        it('returns correct sum if second param is negative number', () => {
            expect(mathEnforcer.sum(5, -5)).to.be.equal(0);
        });
        //floating point numbers
        it ('returns correct sum if both params are positive floating point numbers', ()=>{
            expect(mathEnforcer.sum(5.5,5.5)).to.be.closeTo(11,0.01);
        });
        it ('returns correct sum if first param is positive floating point number', ()=>{
            expect(mathEnforcer.sum(5.5,5)).to.be.closeTo(10.5,0.01);
        });
        it ('returns correct sum if both params are negative floating point numbers', ()=>{
            expect(mathEnforcer.sum(-5.5,-5.5)).to.be.closeTo(-11,0.01);
        });
        it ('returns correct sum if first param is negative floating point number', ()=>{
            expect(mathEnforcer.sum(-5.5,5)).to.be.closeTo(-0.5,0.01);
        });

    });
});

