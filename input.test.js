import expect from 'expect'
import functions from './input'

test('arslane => Arslane',() => {
    expect(functions.capitalize("arslane")).toBe("Arslane")
})

test('arslane => enalsra',() => {
    expect(functions.reverseString("arslane")).toBe('enalsra')
})

test ('3+2 =5',() => {
    expect(functions.Calculator.add(3,2)).toBe(5)
})
test ('3x2 = 6',() => {
    expect(functions.Calculator.multiply(3,2)).toBe(6)
})
test ('3/2 = 1.5',() => {
    expect(functions.Calculator.divide(3,2)).toBe(1.5)
})
test ('3-2 =1',() => {
    expect(functions.Calculator.substract(3,2)).toBe(1)
})

test('xyz => abc',() => {
    expect(functions.caesarCipher('xyz',3)).toBe("abc")
})

test('Hello, World! => Khoor, Zruog!',() => {
    expect(functions.caesarCipher('Hello, World!',3)).toBe("Khoor, Zruog!")
})

test('Array',() => {
    expect(functions.AnalyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})