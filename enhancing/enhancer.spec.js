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

describe('enhancment success unit tests', () => {
    test('enhancment is correctly changed', () => {
        expect(enhancer.succeed({
            name: 'hammer',
            durability: 100,
            enhancment: 15
        })).toEqual({
            name: 'hammer',
            durability: 100,
            enhancment: 16
        })
        expect(enhancer.succeed({
            name: 'hammer',
            durability: 100,
            enhancment: 20
        })).toEqual({
            name: 'hammer',
            durability: 100,
            enhancment: 20
        })
        expect(() => enhancer.succeed({
            name: 'hammer',
            durability: 100,
            enhancment: -1
        })).toThrow()
        expect(() => enhancer.succeed({
            name: 'hammer',
            durability: 100,
            enhancment: 21
        })).toThrow()
    })

    test('item name and durability are not changed', () => {
        const item = enhancer.succeed({
            name: 'hammer',
            durability: 100,
            enhancment: 20
        })
        expect(item.name).toBe('hammer')
        expect(item.durability).toBe(100)
    })

    test('item has all keys', () => {
        expect(() => enhancer.repair({})).toThrow()
    })
})

describe('enhancment failure unit tests', () => {
    test('item enhancment and durability changed correctly (for < en15)', () => {
        expect(enhancer.failure({
            name: 'hammer',
            durability: 100,
            enhancment: 14
        })).toEqual({
            name: 'hammer',
            durability: 95,
            enhancment: 14
        })
        expect(enhancer.failure({
            name: 'hammer',
            durability: 0,
            enhancment: 14
        })).toEqual({
            name: 'hammer',
            durability: 0,
            enhancment: 14
        })
        expect(enhancer.failure({
            name: 'hammer',
            durability: 100,
            enhancment: 14
        })).toEqual({
            name: 'hammer',
            durability: 95,
            enhancment: 14
        })
    })

    test('', () => {
        
    })

    test('', () => {
        
    })
})
