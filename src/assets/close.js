import React from 'react';
import styled from 'styled-components';
const Svg = styled.svg`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;
const Close = ({ onClose }) => {
	return (
		<Svg
			onClick={onClose}
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			version='1.1'
			fill='rgba(166, 168, 179, 0.9)'
			x='0px'
			y='0px'
			viewBox='0 0 100 125'
			xmlSpace='preserve'>
			<path d='M56.5,47.5L78.9,25c1.2-1.2,1.2-3.1,0-4.2c-1.2-1.2-3.1-1.2-4.2,0L52.3,43.3L29.8,20.8c-1.2-1.2-3.1-1.2-4.2,0  c-1.2,1.2-1.2,3.1,0,4.2L48,47.5L25.6,70c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l22.5-22.5l22.5,22.5  c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2L56.5,47.5z' />
		</Svg>
	);
};
export default Close;
