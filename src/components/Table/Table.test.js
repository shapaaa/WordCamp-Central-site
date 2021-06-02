import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';

describe('Table', () => {
	//snapshot testing for a component
	test('snapshot renders', () => {
		const component = renderer.create(<Table />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
