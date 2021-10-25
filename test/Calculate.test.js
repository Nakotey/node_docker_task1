const Calculate = require('../Calculate.js')
const assert = require('assert')

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of two numbers', () => {
            const a = 2;
            const b = 3;
            const expectedResult = 5

            const calculate = new Calculate(a, b)
            const result = calculate.sum(a, b);

            assert.equal(result, expectedResult);
        })
    })
})


describe('Calculate', () => {
    describe('.multiply', () => {
        it('returns the product of two numbers', () => {
            const a = 2;
            const b = 3;
            const expectedResult = 6

            const calculate = new Calculate(a, b)
            const result = calculate.multiply(a, b);

            assert.equal(result, expectedResult);
        })
    })
})

