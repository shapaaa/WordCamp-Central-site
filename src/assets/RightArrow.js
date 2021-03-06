import React from 'react';
import styled, { css } from 'styled-components';
const Icon = styled.svg`
	padding-left: 2px;
	${({ val }) =>
		val &&
		css`
			transform: rotateY(180deg);
		`}
`;
const RightArrow = (props) => {
	return (
		<Icon
			val={props.left}
			width='18'
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 100 125'
			fill='#7047EB'
			x='0px'
			y='0px'>
			<title>Forward</title>
			<path d='M14.37,99.73a2.42,2.42,0,0,0,1.11.27,2.39,2.39,0,0,0,1.35-.42L85.88,52a2.38,2.38,0,0,0,0-3.92L16.83.42a2.39,2.39,0,0,0-3.74,2V97.62A2.38,2.38,0,0,0,14.37,99.73Z' />
		</Icon>
	);
};
export default RightArrow;
