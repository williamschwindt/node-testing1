const enhancer = require('./enhancer.js');

describe('repair unit tests', () => {
    test('item durability restored', () => {
        const item = enhancer.repair({
            name: 'hammer',
            durability: 89,
            enhancment: 5
        })
        expect(item.durability).toBe(100)
        expect(item.name).toBe('hammer')
        expect(item.enhancment).toBe(5)    
    })

    test('item has all keys', () => {
        expect(() => enhancer.repair({})).toThrow()
    })
})
