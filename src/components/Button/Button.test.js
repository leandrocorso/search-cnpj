import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils';

import Button from './Button';

const setup = (props = {}) => (
    shallow(<Button { ...props } />)
);

let component;

describe('Button component', () => {

    beforeEach(() => { 
        component = setup();
    });

    test('Should render the component correctly', () => {
        expect(component).toMatchSnapshot();
    });

    test ('Should have a text', () => {
        const wrapper = findByTestAttr(component, 'buttonText');
        expect(wrapper.text()).not.toEqual('');
    });

    test ('Should have a route', () => {
        const wrapper = findByTestAttr(component, 'button');
        expect(wrapper.props().to).not.toBeUndefined();
    });
    

    describe('with icon', () => {

        beforeEach(() => { 
            component = setup({ icon: 'icon-name' });
        });
        
        test ('Should have a icon', () => {
            const wrapper = findByTestAttr(component, 'button');
            expect(wrapper.props().icon).not.toBeUndefined();
        });
            
    });
        
    describe('without icon', () => {
       
        test ('Should not have a icon', () => {
            const wrapper = findByTestAttr(component, 'button');
            expect(wrapper.props().icon).toBeUndefined();
        });

    });
});
