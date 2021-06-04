import styled, { css } from 'styled-components';
import React from 'react';
import moment from 'moment';
const Data = styled.div`
	border-bottom: 1px solid var(--light-grey);
	border-right: 1px solid var(--light-grey);
	font-size: 1.8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	${({ show }) =>
		show &&
		css`
			background: var(--purple);
			box-shadow: 0 0px 10px rgb(71 134 255 / 90%);
			border-radius: 8px;
			color: white;
		`}
`;
const EventInfo = styled.div`
	color: white;
	background: #fc8211;
	box-shadow: 0 0px 8px rgb(231, 152, 34);
	border-radius: 8px;
	padding: 10px;
	font-size: 1.4rem;
	font-weight: 600;
	width: 100%;
	margin-bottom: 15px;
	cursor: pointer;
`;
const Date = styled.div`
	margin: 10px 0 0 10px;
`;
const Item = (props) => {
	const { index, date, events, dates, bool, handleClick } = props;
	const currDay = moment().day();

	return (
		<Data key={index} show={currDay === index && bool}>
			{/* {console.log(events[dates.indexOf(date)]['title'].rendered)} */}
			<Date>{date}</Date>
			{dates.includes(date) ? (
				<EventInfo onClick={() => handleClick(events[dates.indexOf(date)])}>
					{events[dates.indexOf(date)] ? events[dates.indexOf(date)]['title'].rendered : ''}
				</EventInfo>
			) : null}
		</Data>
	);
};
export default Item;
