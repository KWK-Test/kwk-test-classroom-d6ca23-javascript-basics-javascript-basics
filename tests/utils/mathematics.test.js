import { expect, test, fail } from 'vitest';
import { add, subtract, multiply, divide } from '../../src/utils/mathematics';

describe('the add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds -1 + -1 to equal -2', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});

describe('the subtract function', () => {
  test('REPLACE THIS TEST WITH YOUR OWN', () => {
    assert.fail('REPLACE THIS TEST WITH YOUR OWN');
  });

  test('REPLACE THIS TEST WITH YOUR OWN', () => {
    assert.fail('REPLACE THIS TEST WITH YOUR OWN');
  });

  test('REPLACE THIS TEST WITH YOUR OWN', () => {
    assert.fail('REPLACE THIS TEST WITH YOUR OWN');
  });
});

describe('the multiply function', () => {
  test('multiplies 1 x 3 to equal 3', () => {
    expect(multiply(1, 3)).toBe(3);
  });

  test('multiplies 2 x 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies -2 x 3 to equal -6', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('multiplies -2 x -3 to equal 6', () => {
    expect(multiply(-2, -3)).toBe(6);
  });
});


describe('the divide function', () => {
  test('divides 3 / 1 to equal 3', () => {
    expect(divide(3, 1)).toBe(1);
  });

  test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('returns an error when dividing by 0', () => {
    expect(() => divide(6, 0)).toThrowError(expect.objectContaining({
      message: 'Cannot divide by zero',
    }));
  });
});