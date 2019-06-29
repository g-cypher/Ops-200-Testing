const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('should contain a <h1> element for the page title', () => { 
    return pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
    });
});
it('should contain a <button> element to calculate monthly payment ', () => { 
    return pageObject
    .evaluate(() => document.querySelector('button').innerText)
    .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Calculate');
    });
});
it('should contain an option element for user to choose Monthly payment', () => { 
    return pageObject
    .evaluate(() => document.querySelector('option').innerText)
    .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Monthly');
    });
});

it('should have an input element with the name principal', () => 
    pageObject
    .evaluate(() => document.querySelector('input[name=principal]'))
    .then(input => expect(input).to.exist)
);

it('should have an input element with the name interestRate', () =>
pageObject
.evaluate(() => document.querySelector('input[name=interestRate]'))
.then(input => expect(input).to.exist)
);

it('should contain an input element with name loanTerm', () =>
pageObject
.evaluate(() => document.querySelector('input[name=loanTerm]'))
.then(input => expect(input).to.exist)
);

it('should have a select element with the name period', () =>
pageObject
.evaluate(() => document.querySelector('select[name=period'))
.then(select => expect(select).to.exist)
);

it('should have a paragraph tag with id ', () =>
pageObject
.evaluate(() => document.querySelector('p'))
.then(p => expect(p).to.exist)
);
});