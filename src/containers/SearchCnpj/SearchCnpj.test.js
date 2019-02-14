import React from 'react';
import { shallow } from 'enzyme';

import SearchCnpj from './SearchCnpj';
import SearchCnpjForm from './SearchCnpjForm';

describe('Testing SearchCnpj component', () => {
    
    const wrapper = shallow(<SearchCnpj />);
    const wrapperForm = shallow(<SearchCnpjForm />);
    
    test('SearchCnpj exists', () => {
        expect(wrapper);
    });

    test('Should have "chart icon" in the heading', () => {
        expect(wrapper.find('.testHeadingIcon')).toHaveProp({ src : 'line-chart'});
    });

    test('Should number 1 into step indicator', () => {
        expect(wrapper.find('.testStep')).toHaveText('1');
    });

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Form

    test('SearchCnpjForm exists', () => {
        expect(wrapperForm);
    });

    test('Input text should be named as "cnpj"', () => {
        expect(wrapperForm.find('#cnpj')).toHaveProp({ name: 'cnpj'});
    });

    test('Input text should be placeholded like cnpj format', () => {
        expect(wrapperForm.find('#cnpj')).toHaveProp({ placeholder : '__.___.___/___-__'});
    });

    test('Input text should be maked like cnpj format', () => {
        expect(wrapperForm.find('#cnpj')).toHaveProp({ mask : [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,] });
    });

    test('Input text should not enabled auto complete funcionality', () => {
        expect(wrapperForm.find('#cnpj')).toHaveProp({ autoComplete : 'off' });
    });

    test('Send button exists', () => {
        expect(wrapperForm.find('.testButton'));
    });

    test('Send button linked to home', () => {
        expect(wrapperForm.find('.testButton')).toHaveProp({ to : '/' });
    });

    test('Send button with right arrow icon', () => {
        expect(wrapperForm.find('.testButton')).toHaveProp({ icon : 'arrow-right2' });
    });

    test('Send button should be a color', () => {
        expect(wrapperForm.find('.testButton')).toHaveProp('color');
    });

    test('Should render correctly', () => {
        expect(wrapperForm).toMatchSnapshot();
    });

})