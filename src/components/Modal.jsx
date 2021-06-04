import styled, { css } from 'styled-components';
import React, { useRef } from 'react';
import Close from '../assets/close.js';
import Place from '../assets/place.js';
import Clock from '../assets/clock.js';
import moment from 'moment';

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
`;
const Icon = styled.img`
	height: 30px;
	width: 40px;
	${({ cl }) =>
		cl &&
		css`
			height: 40px;
			width: 40px;
			margin: 0;
			cursor: pointer;
		`}
`;
const IconContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 10px;
`;
const ModalContainer = styled.div`
	border-radius: 10px;
	position: fixed;
	color: rgba(15, 15, 105, 0.7);
	background: white;
	width: 35%;
	overflow-x: hidden;
	height: auto;
	top: 20%;
	left: 32%;
	padding: 2rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Title = styled.div`
	font-size: 2.4rem;
	font-weight: bold;
	line-height: 1.2;
	padding-bottom: 10px;
`;
const Time = styled.div`
	line-height: 1.2;
	font-size: 1.6rem;
	font-weight: 400;
`;
const EventPlace = styled.div`
	line-height: 1.2;
	font-size: 1.6rem;
	font-weight: 600;
`;
const A = styled('a')`
	text-decoration: none;
	font-size: 1.5rem;
	margin-top: 5px;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
const Modal = ({ data, show, onClose }) => {
	if (!show) return null;
	const { title, Location, link, content } = data;
	const str =
		('' + moment.unix(data['Start Date (YYYY-mm-dd)']).local()._d).split('GMT')[0] + 'IST';
	const contentRef = useRef().current;

	return (
		<Container>
			<ModalContainer>
				<Header>
					<Title>{title.rendered}</Title>
					<Close onClose={onClose} />
				</Header>
				<IconContainer>
					<Clock />
					<Time>{str}</Time>
				</IconContainer>
				<IconContainer p>
					<Place />
					<EventPlace>{Location}</EventPlace>
				</IconContainer>
				<EventPlace>Click below for more about this wordcamp:</EventPlace>
				<A href={link}>{link}</A>
			</ModalContainer>
		</Container>
	);
};
export default Modal;
