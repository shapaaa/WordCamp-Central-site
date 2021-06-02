import React from 'react';
import ReactDOM from 'react-dom';
//Import App
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.querySelector('#root')
);
