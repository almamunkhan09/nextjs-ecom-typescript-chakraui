import { add } from '../math';

test('add two numbers together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(2, 2)).toBe(4);
});
test('Throw error when a argument is not a number', () => {
  expect(() => add(1, '1')).toThrow('Pass only numbers');
  expect(() => add('abcd', '1')).toThrow('Pass only numbers');
  expect(() => add('1', '1')).toThrow('Pass only numbers');
});
