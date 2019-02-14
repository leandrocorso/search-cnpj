import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Testing App component', () => {
    
    const wrapper = shallow(<App />);
    
    test('App exists', () => {
        expect(wrapper);
    });

    test('App have the browser router', () => {
        expect(wrapper.find('BrowserRouter'));
    });

    test('App have the global style component', () => {
        expect(wrapper.find('GlobalStyleComponent'));
    });

    test('App have the path to home', () => {
        expect(wrapper.find('.testHome')).toHaveProp({ path : '/'});
    });

    test('App have the path to search page', () => {
        expect(wrapper.find('.testSearch')).toHaveProp({ path : '/busca-cnpj'});
    });

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})