import React,{Component} from 'react';
import CardList from '../Components/CardList.js';


class Search extends Component{
	constructor(){
		super()
		this.state = {
			keyword:''
		}
	}
	Searching(e){
		console.log(e.target.value);
	}
	render(){
		return(
		<input type="search" placeholder="Search" onClick="this.Searching()"/>);
	}
}
export default Search;