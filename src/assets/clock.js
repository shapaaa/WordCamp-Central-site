import React from 'react';
import styled from 'styled-components';
const Svg = styled.svg`
	width: 20px;
	height: 30px;
	margin-right: 10px;
`;
const Clock = () => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			fill='rgba(15, 15, 105, 0.7)'
			data-name='Layer 2'
			viewBox='0 0 24 30'
			x='0px'
			y='0px'>
			<title>essential</title>
			<path d='M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Z' />
			<path d='M13,11.586V6a1,1,0,0,0-2,0v6a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414Z' />
		</Svg>
	);
};
export default Clock;
