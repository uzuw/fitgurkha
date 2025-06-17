// lib/cookieStorage.ts
import Cookies from "js-cookie";

export function setCookie(key: string, value: any, days = 7) {
  Cookies.set(key, JSON.stringify(value), { expires: days });
}

export function getCookie(key: string) {
  const val = Cookies.get(key);
  return val ? JSON.parse(val) : null;
}

export function removeCookie(key: string) {
  Cookies.remove(key);
}
