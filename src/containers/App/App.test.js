import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils';

import App from './App';

const setup = (props = {}) => (
    shallow(<App { ...props } />)
);

let component;

describe('App container', () => {

    beforeEach(() => { 
        component = setup();
    });

    test('Should render the container correctly', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should have a browser router', () => {
        const wrapper = findByTestAttr(component, 'browserRouter');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a path to home', () => {
        const wrapper = findByTestAttr(component, 'homeRouter');
        expect(wrapper).toHaveProp({ path : '/'});
    });

    test('Should have a path to search', () => {
        const wrapper = findByTestAttr(component, 'searchRouter');
        expect(wrapper).toHaveProp({ path : '/search-cnpj'});
    });

    test('Should have a global wrapper component', () => {
        const wrapper = findByTestAttr(component, 'appWrapper');
        expect(wrapper.length).toBe(1);
    });

})