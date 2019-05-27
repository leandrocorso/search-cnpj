import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, consts } from '../../utils';

import InputText from './InputText';

const setup = (props = {}) => (
    shallow(<InputText { ...props } />)
);

let component;

describe('InputText component', () => {
    
    beforeEach(() => { 
        component = setup();
    });

    test('Should render the component correctly', () => {
        expect(component).toMatchSnapshot();
    });

    test ('Should have a form group', () => {
        const wrapper = findByTestAttr(component, 'formGroup');
        expect(wrapper.length).toBe(1);
    });

    test ('Should have a label', () => {
        const wrapper = findByTestAttr(component, 'formLabel');
        expect(wrapper.length).toBe(1);
    });

    test ('Label should inside the form group', () => {
        const wrapper = findByTestAttr(component, 'formLabel');
        expect(wrapper.parent().is(`[data-test='formGroup']`)).toEqual(true);
    });

    test ('Should have a input group', () => {
        const wrapper = findByTestAttr(component, 'inputGroup');
        expect(wrapper.length).toBe(1);
    });

    test ('Input group should inside the form group', () => {
        const wrapper = findByTestAttr(component, 'inputGroup');
        expect(wrapper.parent().is(`[data-test='formGroup']`)).toEqual(true);
    });

    test ('Should have a input text', () => {
        const wrapper = findByTestAttr(component, 'inputText');
        expect(wrapper.length).toBe(1);
    });

    test ('Input text should inside the input group', () => {
        const wrapper = findByTestAttr(component, 'inputText');
        expect(wrapper.parent().is(`[data-test='inputGroup']`)).toEqual(true);
    });

    describe ('CNPJ', () => {

        const validState = { value: consts.VALID_CNPJ };
        const invalidState = { value: '00000000000000' };
        const incompleteState = { value: '1234567890' };
        const validProps = { isValid: true };
        const invalidProps = { isValid: false };

        test ('Should change the state of component', () => {
            component.instance().handleChange(consts.VALID_CNPJ);
            expect(component.state().value).toBe(consts.VALID_CNPJ)
        });

        describe ('Is valid', () => {

            beforeEach(() => { 
                component = setup(validProps);
            });

            test ('Should show the success icon', () => {
                component.setState(validState, () => {
                    expect(component.find('.success').length).toBe(1);
                });
            })
            
        });

        describe ('Is invalid', () => {

            beforeEach(() => { 
                component = setup(invalidProps);
            });

            test ('Should show the error icon', () => {
                component.setState(invalidState, () => {
                    expect(component.find('.danger').length).toBe(1);
                });
            })

        });

        describe ('Is complete', () => {

            test ('Should show a icon', () => {
                component.setState(validState, () => {
                    expect(component.find('.icon').length).toBe(1);
                });
            })

        });

        describe ('Is incomplete', () => {

            test ('Should not show a icon', () => {
                component.setState(incompleteState, () => {
                    expect(component.find('.icon').length).toBe(0);
                });
            })

        });

    })

});