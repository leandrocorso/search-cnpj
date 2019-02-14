import Cookies from 'universal-cookie';

// utils
import { consts } from './';

const cookies = new Cookies();

class Auth {
  static getToken() {
    return cookies.get('token');
  }

  static setToken() {
    cookies.set('token', consts.TOKEN, { path: '/' });
  }

  static isValidToken() {
    if (!cookies.get('token')) return false;

    if (cookies.get('token') === consts.TOKEN) {
      return true;
    } else {
      return false;
    }
  }
}

export default Auth;
