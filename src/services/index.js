import { Api, consts } from '../utils';

class Services {

    static getCnpj(cnpj) {
        
        // In a real world application it should to be "/quote/:cnpj"
        Api.get('/users/1');

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (+cnpj === +consts.VALID_CNPJ) {
                    resolve({ isValid: true });
                } else {
                    reject({ isValid: false });
                }
            }, 500);
        });
    }
}

export default Services;
