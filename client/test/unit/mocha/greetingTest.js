const greet = require('../../../src/utils/greeting')

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('greeting test', () => {
    it('greet guest', () => {
        greet('').should.be.equal('Hello, guest!');
    })
    it('greet guest', () => {
        greet('Test').should.be.equal('Hello, Test!');
    })
})