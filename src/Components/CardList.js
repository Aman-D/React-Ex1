import React from 'react';
import Card from './Card.js';
import './CardList.css';
import {robots} from '../../src/robots.js';

const CardList = (props) =>{
	const filteredArray = robots.filter(robots=>{
		return robots.name.toLowerCase().includes(props.searchWord.toLowerCase())
	})
	const robotArray = filteredArray.map((user,i)=>{
		return <Card  key = {user.id} id= {user.id} name= {user.name} email= {user.email} />			
	});
	return (
		<div className="cardBox">
			{robotArray}
		</div>
		);
	}
	

export default CardList;