/* global describe, it */
const { numLeft } = require('../index')
const assert = require('assert')
describe('Monkey and the coconut unit tests', function () {
  it('is null', function () {
    const result = numLeft()
    const expected = 'invalid'
    assert.strictEqual(result, expected)
  })
  it('has incorrect parameters', function () {
    const result1 = numLeft('a', 2)
    const result2 = numLeft(5, 'b')
    const result3 = numLeft('c', 'd')
    const expected = 'invalid'
    assert.strictEqual(result1, expected)
    assert.strictEqual(result2, expected)
    assert.strictEqual(result3, expected)
  })
  it('correctly coerces', function () {
    const result = numLeft('5', '1')
    const unexpected = 'invalid'
    assert.notStrictEqual(result, unexpected)
  })
  it('returns correct answers', function () {
    const result1 = numLeft(5, 1)
    const expected1 = 15621
    const result2 = numLeft(11, 2)
    const expected2 = 3138428376701
    const result3 = numLeft(1, 0)
    const expected3 = 1
    const result4 = numLeft(100, 5)
    const expected4 = 1e+202
    assert.strictEqual(result1, expected1)
    assert.strictEqual(result2, expected2)
    assert.strictEqual(result3, expected3)
    assert.strictEqual(result4, expected4)
  })
})
