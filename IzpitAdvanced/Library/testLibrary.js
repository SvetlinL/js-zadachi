const {expect} = require('chai');
const library = require('./Library');

describe('library checker', ()=>{
   describe('calcPrice method testing', ()=>{
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('5',23)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('',1980)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         let emptystr = '';
         expect(library.calcPriceOfBook.bind(emptystr,1980)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind(20,1980)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('lapa',5.5)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('lapa',-5.5)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('lapa',-500)).to.throw("Invalid input");
      });
      it('throws', ()=>{
         expect(library.calcPriceOfBook.bind('lapa','asdasd')).to.throw("Invalid input");
      });
      it('returns correct', ()=>{
         expect(library.calcPriceOfBook('lapa',1981)).to.be.equal("Price of lapa is 20.00");
      });
      it('returns correct', ()=>{
         expect(library.calcPriceOfBook('lapa',1980)).to.be.equal("Price of lapa is 10.00");
      });
      it('returns correct', ()=>{
         expect(library.calcPriceOfBook('lapa',1977)).to.be.equal("Price of lapa is 10.00");
      });
   });

   describe('findBook method checker', ()=> {
      it('throws',()=>{
         let booksArr = [];
         expect(()=>library.findBook([], 'lapa').to.throw("No books currently available"));
      });
      it('returns correct', ()=> {
         let booksArr = ["Troy", "Life Style", "Torronto"];
         expect(()=>library.findBook(booksArr, 'Troy').to.be.equal('We found the book you want.'));
      });
      it('returns correct', ()=> {
         let booksArr = ["Troy", "Life Style", "Torronto"];
         expect(library.findBook(booksArr, 'Life Style').to.be.equal('We found the book you want.'));
      });
      it('returns correct', ()=> {
         let booksArr = ["Troy", "Life Style", "Torronto"];
         expect(library.findBook(booksArr, 'Torronto').to.be.equal('We found the book you want.'));
      });
      it('returns correct', ()=> {
         let booksArr = ["Troy", "Life Style", "Torronto"];
         expect(library.findBook(booksArr, 'lapa').to.be.equal('The book you are looking for is not here!'));
      });
   });
   describe('arrangeTheBooks method testing', ()=> {
      it('throws', ()=>{
         expect(library.arrangeTheBooks.bind(-10)).to.throw('Invalid input');
      });
      it('throws', ()=>{
         expect(library.arrangeTheBooks.bind(5.5)).to.throw('Invalid input');
      });
      it('throws', ()=>{
         expect(library.arrangeTheBooks.bind(-5.5)).to.throw('Invalid input');
      });
      it('throws', ()=>{
         expect(library.arrangeTheBooks.bind('asdad')).to.throw('Invalid input');
      });
      it('returns correct', ()=>{
         expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
      });
      it('returns correct', ()=>{
         expect(library.arrangeTheBooks(39)).to.be.equal('Great job, the books are arranged.');
      });
      it('returns correct', ()=>{
         expect(library.arrangeTheBooks(50)).to.be.equal('Insufficient space, more shelves need to be purchased.');
      });
   });
});