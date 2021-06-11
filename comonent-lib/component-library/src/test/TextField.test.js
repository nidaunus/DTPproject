import TextField from '../components/TextField/TextField';
import { shallow, configure } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react'

configure({ adapter: new Adapter() });

const { describe, it } = global;

/* describe('Component Library Tettfield testing', () => {
    it('Textfield should be correct', () => {
        const tree = renderer.create(
            <TextField
                id='id'
                label='Outlined'
                variant='outlined'
                required={false}
                defaultValue='value'
            />
        )
    })
}) */

describe('TextField', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TextField />);
    });
    it('renders with minimum props without exploding', () => {
        wrapper.setProps({
            id: 'id',
            label: 'Outlined',
            variant: 'outlined',
            required: false,
            defaultValue: 'value'
        });
        expect(wrapper).toHaveLength(1);
    });
});