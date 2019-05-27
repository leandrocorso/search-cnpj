import consts from './consts';
import Auth from './Auth';
import Api from './Api';

const findByTestAttr = (component, attr) => (
    component.find(`[data-test="${attr}"]`)
);

const int = (string) => {
    return string.replace(/[^0-9]/g,'');
}


export { consts, Auth, Api, findByTestAttr, int };
