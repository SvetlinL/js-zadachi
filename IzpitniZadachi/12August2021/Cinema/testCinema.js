const {expect} = require('chai');
const cinema = require('./Cinema');

describe('Cinema Unit Testing', () => {
    describe('Show movies check', () => {
        it('returns message when input array is empty', () => {
            let movies = [];
            expect(cinema.showMovies(movies)).to.be.equal('There are currently no movies to show.');
        });
        it('returns movies as an array when input is valid', () => {
            let movies = ['King Kong', 'The Tomorrow War', 'Joker'];
            expect(cinema.showMovies(movies)).to.be.equal('King Kong, The Tomorrow War, Joker');
        });
    });
    describe('ticketPrice method checker', () => {
        it('returns correct price if input is the correct projection type', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });
        it('returns correct price if input is the correct projection type', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });
        it('returns correct price if input is the correct projection type', ()=>{
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
        it('throws an error when then the input is not correct projection type', () => {
            expect(cinema.ticketPrice.bind('lapa')).to.throw();
        });
    });
    describe('swapSeatsInHall method checker', () => {
        it('returns "Successful change" if input params are integers of correct values', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equal('Successful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if input params are integers of incorrect values', () => {
            expect(cinema.swapSeatsInHall(60, 70)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if input params are floating point numbers', () => {
            expect(cinema.swapSeatsInHall(5.5, 2.2)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if input params are strings', () => {
            expect(cinema.swapSeatsInHall('asdads', 'asdsada')).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if input params are negative integers', () => {
            expect(cinema.swapSeatsInHall(-10, -20)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if input params are equal numbers', () => {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if first param is not in capacity range', () => {
            expect(cinema.swapSeatsInHall(30, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns "Unsuccessful change" if seconds param is not in capacity range', () => {
            expect(cinema.swapSeatsInHall(5, 30)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
    });
});

