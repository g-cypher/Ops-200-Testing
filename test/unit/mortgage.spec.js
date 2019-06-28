const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage', () => {
    let mortgage = null;

beforeEach(() => {
    mortgage = new Mortgage();
});

it('should have a Monthly Payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
});

it('Monthly Payment should not be NaN', () => {
    expect(mortgage.monthlyPayment(5, 10, 15, 20)).to.not.be.NaN;
});

it('Monthy Payment should not be 0', () => {
    expect(mortgage.monthlyPayment(5, 10, 15, 20)).to.not.equal(0);
});

it('Monthly Payment should equal 5.984945145183306', () => {
    expect(mortgage.monthlyPayment(1000, 1.0, 15, 12)).to.equal(5.984945145183306);
});

});


