import styled from 'styled-components';
import React from 'react';
import RightArrow from '../../assets/RightArrow.js';

const Container = styled.div`
	background: linear-gradient(90deg, hsla(11, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%);
	display: flex;
	height: 60px;
	justify-content: center;
	align-items: center;
`;
export const Month = styled.div`
	color: white;
	font-size: 1.8rem;
	font-weight: 600;
	line-height: 1.3;
	margin: 5px;
`;
export const Button = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	box-shadow: 0 0 8px rgba(51, 45, 45, 0.1);
	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
`;
export const Wrapper = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
`;
const Year = styled(Month)``;
const Header = (props) => {
	const { month, year, handleLeftClick, handleRightClick } = props;
	return (
		<Container>
			<Button id='left' onClick={handleLeftClick}>
				<RightArrow left />
			</Button>
			<Wrapper>
				<Month>{month}</Month>
				<Year>{year}</Year>
			</Wrapper>
			<Button id='right' onClick={handleRightClick}>
				<RightArrow />
			</Button>
		</Container>
	);
};
export default Header;
