import Cookies from 'js-cookie';

export type CookieValue = {
  id: number;
  quantity: number;
}[];

export function getParsedCookie(key: string): CookieValue | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export function removeCookie(key: string) {
  Cookies.remove(key);
}

export function setStrinfiedCookie(key: string, value: CookieValue): void {
  Cookies.set(key, JSON.stringify(value));
}

export function stringifyCookieValue(value: CookieValue): string {
  return JSON.stringify(value);
}
