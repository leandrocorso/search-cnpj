import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, Auth, consts } from '../../utils';

import SearchCnpj from './SearchCnpj';
import SearchCnpjForm from './SearchCnpjForm';

const containerSetup = (props = {}) => (
    shallow(<SearchCnpj { ...props } />)
);

const formSetup = (props = {}) => (
    shallow(<SearchCnpjForm { ...props } />)
);

let component;

describe('SearchCnpj container', () => {

    beforeEach(() => { 
        component = containerSetup();
    });

    test('Should be logged', () => {
        Auth.setToken();
        const isLogged = Auth.isLogged();
        expect(isLogged).toBe(true);
    });

    test('Should render the container correctly', () => {
        expect(component).toMatchSnapshot();
    });
    
    test('Should have a chart icon in the heading', () => {
        const wrapper = findByTestAttr(component, 'chartIcon');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a title in the heading', () => {
        const wrapper = findByTestAttr(component, 'title');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a subtitle in the heading', () => {
        const wrapper = findByTestAttr(component, 'subtitle');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a user avatar in the heading', () => {
        const wrapper = findByTestAttr(component, 'avatar');
        expect(wrapper.length).toBe(1);
    });

    test('Should have the number 1 into step indicator', () => {
        const wrapper = findByTestAttr(component, 'stepNumber');
        expect(wrapper).toHaveText('1');
    });

});


describe('SearchCnpj container', () => {

    beforeEach(() => { 
        component = formSetup();
    });

    test('Should render the form correctly', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should have a form', () => {
        const wrapper = findByTestAttr(component, 'searchForm');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a input text to insert cnpj value', () => {
        const wrapper = findByTestAttr(component, 'inputCnpj');
        expect(wrapper).toHaveProp({ label: 'CNPJ / Empresa'});
        expect(wrapper).toHaveProp({ name: 'cnpj'});
        expect(wrapper).toHaveProp({ placeholder: '__.___.___/___-__'});
    });

    test('Should have a submit form button', () => {
        const wrapper = findByTestAttr(component, 'submitButton');
        expect(wrapper.length).toBe(1);
        expect(wrapper).toHaveProp({ icon: 'arrow-right2'});
    });

    test('Submit button should have primary color if CNPJ is valid', () => {
        component.setState({ isValid: true }, () => {
            const wrapper = findByTestAttr(component, 'submitButton');
            expect(wrapper).toHaveProp({ to: '/'});
            expect(wrapper).toHaveProp({ className: 'primary'});
        })
    });

    test('Submit button should have default and disabled color if CNPJ is invalid', () => {
        component.setState({ isValid: false }, () => {
            const wrapper = findByTestAttr(component, 'submitButton');
            expect(wrapper).toHaveProp({ to: '#'});
            expect(wrapper).toHaveProp({ className: 'default disabled'});
        })
    });

});

describe('Search result', () => {

    test('Should be true for a valid CNPJ', async () => {
        await component.instance().getCnpj(consts.VALID_CNPJ)
        expect(component.state().isValid).toBe(true);
    });

    test('Should be false for a invalid CNPJ', async () => {
        await component.instance().getCnpj('00000000000000')
        expect(component.state().isValid).toBe(false);
    });

});