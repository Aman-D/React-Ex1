import React,{Component} from 'react';
import CardList from '../Components/CardList.js';
import './Search.css';


class Search extends Component{
	constructor(){
		super()
		this.state = {
			keyword:''
		}
		
	}
	Searching = (event)=>{
		this.setState({
			keyword : event.target.value
		});
	}


	render(){
		return(
		<div>	
		<input type="search" placeholder="Search" onChange={this.Searching}/>
		<CardList searchWord={this.state.keyword}/>
		</div>
	);}
}
export default Search;