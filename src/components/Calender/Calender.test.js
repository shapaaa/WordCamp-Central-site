import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Header, { Wrapper, Month, Button } from '../Header/Header';
import Calender from './Calender';
import Table from '../Table/Table';
const mockFunction = jest.fn();

describe('Calender', () => {
	test('snapshot renders', () => {
		const component = renderer.create(<Calender />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('renders the Header', () => {
		const wrapper = mount(<Calender />);
		expect(wrapper.find(Header).length).toEqual(1);
	});
	it('renders the Table', () => {
		const wrapper = mount(<Calender />);
		expect(wrapper.find(Table).length).toEqual(1);
	});
	it('should call function on button click', () => {
		const component = mount(<Header handleLeftClick={mockFunction} />);
		component.find(Button).at(0).simulate('click');
		expect(mockFunction).toHaveBeenCalled();
		component.unmount();
	});
});
