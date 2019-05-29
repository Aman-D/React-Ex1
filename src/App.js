import React from 'react';
import './App.css'
import CardList from './Components/CardList.js';
import Search from './Components/Search.js';
const App = () =>{
	return(
		<div>
			<h1>Robot Email Group</h1>
			<Search/>
			<CardList />
		</div>
		);
}

export default App;