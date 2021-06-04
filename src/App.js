import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calender from './components/Calender/Calender';
import axios from 'axios';
import moment from 'moment';
const Container = styled.div`
	width: 80vw;
	margin: 0 auto;
	background-color: white;
`;
const App = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		const URI = 'https://central.wordcamp.org/wp-json/wp/v2/wordcamps';
		try {
			const fetchData = async () => {
				const firstRes = await axios.get(`${URI}?order=desc&page=1&per_page=100`);
				setEvents((e) => e.concat(firstRes.data));
				const totalPages = firstRes.headers['x-wp-totalpages'];
				if (totalPages > 1) {
					let arr = [];
					for (let i = 2; i <= totalPages; i++) {
						const { data } = await axios.get(`${URI}?page=${i}&order=desc&per_page=100`);
						arr.push(data);
					}
					const res = await Promise.all(arr);
					setEvents((e) => e.concat(res));
				}
			};
			fetchData();
		} catch (err) {
			throw new Error(err);
		}
	}, []);
	return (
		<Container>
			<Calender events={events} />
		</Container>
	);
};
export default App;
