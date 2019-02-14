import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Testing Home component', () => {
    
    const wrapper = shallow(<Home />);
    
    test('Home exists', () => {
        expect(wrapper);
    });

    test('Home have a button to search page', () => {
        expect(wrapper.find('.testSearch')).toHaveProp({ to : '/busca-cnpj'});
    });

    test('Should have arrow to right icon into the button to search page', () => {
        expect(wrapper.find('.testSearch')).toHaveProp({ icon : 'arrow-right2'});
    });

    test('Should be primary color for the button to search page', () => {
        expect(wrapper.find('.testSearch')).toHaveProp({ color : 'primary'});
    });

    test('Should have "chart icon" in the heading', () => {
        expect(wrapper.find('.testHeadingIcon')).toHaveProp({ src : 'line-chart'});
    });

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})