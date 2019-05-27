import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils';

import Icon from './Icon';

const setup = (props = {}) => (
    shallow(<Icon { ...props } />)
);

let component;

describe('Icon component', () => {

    beforeEach(() => { 
        component = setup();
    });

    test('Should render the component correctly', () => {
        expect(component).toMatchSnapshot();
    });
    
    test('Should have a source', () => {
        const wrapper = findByTestAttr(component, 'icon');
        expect(wrapper).toHaveProp('src');
    });

})