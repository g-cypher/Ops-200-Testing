module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
    }

    monthlyPayment(principal, interest, term, period) {
        const monthlyInterestRate = (interest / 100) / period
        const numberOfPayments = term * period
        const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
        const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ( (Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1)
        const monthlyPayment = principal * interestQuotient
        return monthlyPayment
    }
}