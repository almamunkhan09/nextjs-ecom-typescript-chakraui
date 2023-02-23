import {
  getParsedCookie,
  removeCookie,
  setStrinfiedCookie,
  stringifyCookieValue,
} from '../cookies';

test('Stringify the cookie value', () => {
  expect(
    stringifyCookieValue([
      { id: 1, quantity: 3 },
      { id: 2, quantity: 4 },
    ]),
  ).toBe('[{"id":1,"quantity":3},{"id":2,"quantity":4}]');
});

test('get,set,delete cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, quantity: 2 }],
  };
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  // set a cookie
  expect(() => setStrinfiedCookie(cookie.key, cookie.value)).not.toThrow();
  // get again
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);
  expect(removeCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
