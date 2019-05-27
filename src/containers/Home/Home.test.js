import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils';

import Home from './Home';

const setup = (props = {}) => (
    shallow(<Home { ...props } />)
);

let component;

describe('Home container', () => {

    beforeEach(() => { 
        component = setup();
    });

    test('Should render the container correctly', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should have a "chart icon" in the heading', () => {
        const wrapper = findByTestAttr(component, 'chartIcon');
        expect(wrapper.length).toBe(1);
    });

    test('Should have a button to search page', () => {
        const wrapper = findByTestAttr(component, 'testSearch');
        expect(wrapper.length).toBe(1);
        expect(wrapper).toHaveProp({ to : '/search-cnpj'});
        expect(wrapper).toHaveProp({ icon : 'arrow-right2'});
        expect(wrapper.find('.default').length).toBe(1);
    });

})