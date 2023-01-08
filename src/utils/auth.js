import Cookies from 'js-cookie'

const COOKIESKEY = 'CookiesKey-music'

export function getCookies () {
  return Cookies.get(COOKIESKEY)
}

export function setCookies (cookies) {
  return Cookies.set(COOKIESKEY, cookies)
}

export function removeCookies () {
  return Cookies.remove(COOKIESKEY)
}
