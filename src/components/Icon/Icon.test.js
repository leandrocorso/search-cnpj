import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('Testing Icon component', () => {
    
    const wrapper = shallow(<Icon />);
    
    test('Icon exists', () => {
        expect(wrapper);
    });

    test('Should have a source', () => {
        expect(wrapper).toHaveProp('src');
    });

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})