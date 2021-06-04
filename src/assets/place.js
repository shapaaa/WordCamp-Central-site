import React from 'react';
import styled from 'styled-components';
const Svg = styled.svg`
	width: 20px;
	height: 30px;
	margin-right: 10px;
`;
const Place = () => {
	return (
		<Svg
			fill='rgba(15, 15, 105, 0.7)'
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 100 125'
			x='0px'
			y='0px'>
			<title>Ui Location Map OL</title>
			<path d='M50,5A27.29,27.29,0,0,0,22.7,32.23c0,21.56,24.39,58.4,25.43,60L50,95l1.87-2.81c1-1.56,25.43-38.4,25.43-60A27.29,27.29,0,0,0,50,5Zm0,81.78c-5.76-9.15-22.8-37.66-22.8-54.55a22.8,22.8,0,0,1,45.6,0C72.8,49.11,55.76,77.63,50,86.78Z' />
			<path d='M50,17.68A14.55,14.55,0,1,0,64.58,32.23,14.58,14.58,0,0,0,50,17.68Zm0,24.59a10,10,0,1,1,10.08-10A10.07,10.07,0,0,1,50,42.27Z' />
		</Svg>
	);
};
export default Place;
