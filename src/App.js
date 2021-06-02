import React from 'react';
import styled from 'styled-components';
import Calender from './components/Calender/Calender';

const Container = styled.div`
	width: 80vw;
	margin: 0 auto;
	background-color: white;
`;
const App = () => {
	return (
		<Container>
			<Calender />
		</Container>
	);
};
export default App;
