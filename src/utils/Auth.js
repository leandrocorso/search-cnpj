import Cookies from 'universal-cookie';

import { consts } from './';

const cookies = new Cookies();

class Auth {

    static getToken = () => ( cookies.get('token') );
    
    static setToken = () => ( cookies.set('token', consts.TOKEN, { path: '/' } ) );

    static isLogged = () => {
        if (!cookies.get('token')) return false;
        return cookies.get('token') === consts.TOKEN;
    };

}

export default Auth;