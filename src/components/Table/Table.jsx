import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Container = styled.div``;
const WeekDays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, minmax(120px, 1fr));
	border-bottom: 1px solid rgba(166, 168, 179, 0.12);
`;
const Days = styled.div`
	display: grid;
	grid-template-columns: repeat(7, minmax(120px, 1fr));
	grid-template-rows: repeat(4, minmax(120px, 1fr));
	grid-auto-rows: minmax(120px, 1fr);
`;
const Day = styled.div`
	height: 50px;
	font-size: 1.4rem;
	font-weight: 400;
	color: var(--grey);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Data = styled.div`
	border-bottom: 1px solid rgba(166, 168, 179, 0.12);
	border-right: 1px solid rgba(166, 168, 179, 0.12);
	font-size: 1.8rem;
	display: flex;
	padding-right: 20px;
	padding-top: 20px;
	justify-content: flex-end;
	${({ currDay, date }) =>
		currDay &&
		date &&
		currDay === date &&
		css`
			box-shadow: 0 0px 10px rgb(71 134 255 / 90%);
			background: var(--blue);
			border-radius: 8px;
		`}
`;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Table = (props) => {
	const [monthDays, setMonthDays] = useState([]);
	const { month, months, year } = props;
	const input = `${month}-${year}`;
	const currDay = moment().day();
	const currMonth = moment().month();
	const currYear = moment().year();
	console.log(currDay);
	const getStartDay = () => {
		return moment(input).startOf('month').day();
	};
	const getDays = () => {
		let startIndex = getStartDay();
		let daysInMonth = moment(input).daysInMonth();
		let days = [];
		for (let i = 0; i < startIndex; i++) {
			days.push(null);
		}
		for (let i = startIndex; i < daysInMonth + startIndex; i++) {
			days.push(i - (startIndex - 1));
		}
		let len = days.length;
		if (len % 7 != 0) {
			let rows = Math.ceil(len / 7);
			let limit = rows * 7 > len ? rows * 7 - len : (rows + 1) * 7 - len;
			for (let i = 0; i < limit; i++) {
				days.push(null);
			}
		}
		return days;
	};
	useEffect(() => {
		const monthdays = getDays();
		setMonthDays(monthdays);
	}, [month]);
	return (
		<Container>
			<WeekDays>
				{weekDays.map((day, index) => (
					<Day key={index}>{day.toUpperCase()}</Day>
				))}
			</WeekDays>
			<Days>
				{monthDays.map((d, index) => {
					if (currYear == year && months[currMonth] == month) {
						return (
							<Data key={index} currDay={currDay} date={index}>
								{d}
							</Data>
						);
					} else {
						return <Data key={index}>{d}</Data>;
					}
				})}
			</Days>
		</Container>
	);
};
export default Table;
