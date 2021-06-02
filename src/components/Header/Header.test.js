import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
	it('renders without crashing', () => {
		shallow(<Header />);
	});
	test('snapshot renders', () => {
		const component = renderer.create(<Header />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
