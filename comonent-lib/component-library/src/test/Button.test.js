import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import renderer from 'react-test-renderer';
import React from 'react'

configure({ adapter: new Adapter() });

const { describe, it } = global;

/* describe('Component Library Button Testing', () => {
    it('shuld be correct', () => {
        const tree = renderer.create(
            <Button
                text='hello'
                color='primary'
                variant='contained'
            />
        )
    })
}) */

describe('Button Testing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button />);
    });
    it('renders with minimum props without exploding', () => {
        wrapper.setProps({
            text: 'hello',
            color: 'primary',
            variant: 'contained'
        });
        expect(wrapper).toHaveLength(1);
    });
});