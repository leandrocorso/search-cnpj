import React from 'react';
import { shallow } from 'enzyme';

import InputText from './InputText';

describe('Testing InputText component', () => {
    
    const wrapper = shallow(<InputText />);
    
    test('InputText exists', () => {
        expect(wrapper.find('input'));
    });

    test('InputText have a name', () => {
        expect(wrapper.find('.inputTest')).toHaveProp('name');
    });

    test('Label element exists', () => {
        expect(wrapper.find('label'));
    });

    test('Label have reference to input text', () => {
        expect(wrapper.find('label')).toHaveProp('htmlFor');
    });  

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})