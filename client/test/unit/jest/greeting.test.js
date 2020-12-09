const greet = require('../../../src/utils/greeting')

describe('testing greeting',  () => {
    it('greet guest', () => {
        expect(greet('')).toBe('Hello, guest!');
    })

    it('greet Karl', () => {
        expect(greet('Karl')).toBe('Hello, Karl!');
    })
})
