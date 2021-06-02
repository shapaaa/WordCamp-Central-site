import styled from 'styled-components';
import Header from '../Header/Header';
import Table from '../Table/Table';
import React, { useState } from 'react';
import moment from 'moment';

const Container = styled.div`
	box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
	width: 100%;
	background-color: linear-gradient(to bottom, #fafbfd 0%, rgba(255, 255, 255, 0) 100%);
	border-radius: 8px;
	margin: 50px 0;
	z-index: -2;
	overflow: hidden;
`;
const CalenderContainer = () => {
	const currentMonth = moment().month();
	const currentYear = moment().year();
	const months = moment.months();
	const [month, setMonth] = useState(months[currentMonth]);
	const [year, setYear] = useState(currentYear);
	const handleLeftClick = () => {
		const index = months.indexOf(month);
		if (index == 0) {
			setMonth(months[11]);
			setYear(year - 1);
		} else setMonth(months[index - 1]);
	};
	const handleRightClick = () => {
		const index = months.indexOf(month);
		if (index == 11) {
			setMonth(months[0]);
			setYear(year + 1);
		} else setMonth(months[index + 1]);
	};
	return (
		<Container>
			<Header
				month={month}
				year={year}
				handleLeftClick={handleLeftClick}
				handleRightClick={handleRightClick}
			/>
			<Table months={months} month={month} year={year} />
		</Container>
	);
};
export default CalenderContainer;
