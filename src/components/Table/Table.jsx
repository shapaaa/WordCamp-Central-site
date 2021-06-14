import styled, { css } from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import Item from '../Item';
import Modal from '../Modal';

const Container = styled.div`
	position: relative;
`;
const WeekDays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, minmax(120px, 1fr));
	border-bottom: 1px solid var(--light-grey);
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

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Table = (props) => {
	const [monthDays, setMonthDays] = useState([]);
	const { month, months, year, events } = props;
	const [currEvents, setCurrEvents] = useState([]);
	const [eventDates, setEventDates] = useState([]);
	const [modalData, setModalData] = useState([]);
	const [show, setShow] = useState(false);
	const input = `${month}-${year}`;
	const currMonth = months[new Date().getMonth()];
	const currYear = moment().year();
	const currInput = useRef(`${currMonth}-${currYear}`);
	const getCurrentEvents = () =>
		events.filter((event) => {
			const time = moment.unix(event['Start Date (YYYY-mm-dd)']);
			return months[time.month()] == month && time.year() == year;
		});
	const getEventDates = () =>
		currEvents.map((e, index) => {
			return moment.unix(e['Start Date (YYYY-mm-dd)']).date();
		});
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
	const handleClick = (data) => {
		setShow(true);
		setModalData(data);
	};
	const onClose = () => {
		setShow(false);
	};
	useEffect(() => {
		if (currInput.current != input || currEvents.length == 0) {
			currInput.current = input;
			setCurrEvents(getCurrentEvents());
		}
	}, [input, events]);
	useEffect(() => {
		setEventDates(getEventDates());
	}, [currEvents]);
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
					return (
						<Item
							handleClick={handleClick}
							bool={currYear == year && currMonth == month}
							events={currEvents}
							dates={eventDates}
							date={d}
							key={index}
							index={index}
						/>
					);
				})}
			</Days>
			<Modal onClose={onClose} data={modalData} show={show} />
		</Container>
	);
};
Table.defaultProps = {
	events: [],
	months: [],
};
export default Table;

// <Data key={index} currDay={currDay} date={index}>
// 	<Date>{d}</Date>
// 	{eventDates.includes(d) ? (
// 		<EventInfo>{currEvents[eventDates.indexOf(d)]['title'].rendered}</EventInfo>
// 	) : null}
// </Data>
