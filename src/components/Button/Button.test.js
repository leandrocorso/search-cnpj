import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Testing Button component', () => {
    
    const wrapper = shallow(<Button>Text button</Button>);
    const element = wrapper.find('.btn');
    
    test('Button exists', () => {
        expect(element);
    });

    test('Should have a text', () => {
        expect(element).toHaveText();
    });

    test('Should have a route', () => {
        expect(element).toHaveProp('to');
    });

    test('Should have a icon', () => {
        expect(element).toHaveProp('icon');
    });

    test('Should have a color', () => {
        expect(element).toHaveProp('color');
    });

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})