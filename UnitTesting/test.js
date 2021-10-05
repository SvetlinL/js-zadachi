const {expect, assert} = require('chai');
const isSymmetric = require('./Symetry');

describe('Symmetry Checker', () => {
    it('Should be true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });

    it('returns false if argument is not array', () => {
        expect(isSymmetric(5)).to.be.false;
    })

    it('returns false for type different symmetric array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    })

    it('returns false for string type args odd number', ()=>{
        expect(isSymmetric('a', 'b', 's')).to.be.false;
    })
    // test overloading
    it('Should be true if array is symmetric with odd number arguments', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('returns true with symmetric string type args', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    })
});

