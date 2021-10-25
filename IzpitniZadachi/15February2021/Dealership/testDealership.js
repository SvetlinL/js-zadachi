const {expect} = require('chai');
const dealership = require('./dealership');

describe('dealership checker', () => {
    describe('newCarCost method testing', () => {
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.eq(15000);
        });
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.be.eq(10000);
        });
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.be.eq(5000);
        });
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.be.eq(16000);
        });
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Lada', 30000)).to.be.eq(30000);
        });
        it('returns correct price if input is correct', () => {
            expect(dealership.newCarCost('Audi TT 8J', 'lapa')).to.be.NaN;
        });
    });
    describe('carEquipment method testing', () => {
        it('returns selected extras if input is correct', () => {
            //['heated seats', 'sliding roof', 'sport rims', 'navigation']
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3]))
                .to.deep.equal(['heated seats', 'navigation']);
        });
        it('returns selected extras if input is correct', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2, 3]))
                .to.deep.equal(['heated seats', 'sliding roof', 'sport rims', 'navigation']);
        });
        it('returns selected extras if input is correct', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0]))
                .to.deep.equal(['heated seats']);
        });
        it('returns selected extras if input is correct', () => {
            expect(dealership.carEquipment([], [0]))
                .to.deep.equal([undefined]);
        });
    });
    describe('euroCategory method testing', () => {
        it('returns correct message if input is valid', ()=> {
           expect(dealership.euroCategory(1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('returns correct message if input is invalid', ()=> {
            expect(dealership.euroCategory(-1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('returns correct message if input is invalid', ()=> {
            expect(dealership.euroCategory('lap')).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('returns correct message if input is valid', ()=> {
            expect(dealership.euroCategory(4))
                .to.be.equal('We have added 5% discount to the final price: 14250.');
        });
        it('returns correct message if input is valid', ()=> {
            expect(dealership.euroCategory(10))
                .to.be.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});