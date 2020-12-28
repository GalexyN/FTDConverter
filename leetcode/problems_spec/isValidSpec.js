const assert = require('chai').assert;
const isValid = require('../problems/isValid');

describe('isValid Test', () => {
  it('function should return false for odd length strings', () => {
    assert.equal(isValid('{}]'), false);
  });

  it('function should return true for {}', () => {
    assert.equal(isValid('{}'), true);
  });
  it('function should return true for []', () => {
    assert.equal(isValid('[]'), true);
  });
  it('function should return true for ()', () => {
    assert.equal(isValid('()'), true);
  });
  it('function should return true for ()[]', () => {
    assert.equal(isValid('()[]'), true);
  });
  it('function should return false for ([]}', () => {
    assert.equal(isValid('([]}'), false);
  });
  it('should return true for ([{}])', () => {
    assert.equal(isValid('([{}])'), true);
  });
  it('should return false for ([)]', () => assert.equal(isValid('([)]'), false));
  it('should return false for (}{)', () => assert.equal(isValid('(}{)'), false));
  it('should return false for ][', () => assert.equal(isValid(']['), false));
  it('should return false for "(([]){})"', () => assert.equal(isValid("(([]){})"), true));

});