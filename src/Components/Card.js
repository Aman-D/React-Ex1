import React from 'react';
import './Card.css';


const Card = ({id,name,email})=>{
	return(
		<div className="card">
		<img src={`https://robohash.org/${id}?set=set2`} alt="robot image"/>
		<h2>{name}</h2>
		<h3>{email}</h3>
		</div>
		);
}
export default Card;