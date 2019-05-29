import React from 'react';
import Card from './Card.js';
import './CardList.css';
import {robots} from '../../src/robots.js';

const CardList = () =>{
	const robotArray = robots.map((user,i)=>{
		return <Card id={user.id} name={user.name} email={user.email}/>
	});
	return (
		<div className="cardBox">
			{robotArray}
		</div>
		);}
	

export default CardList;