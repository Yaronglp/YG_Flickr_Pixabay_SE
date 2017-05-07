import React, {Component} from 'react';
import {FlickrSearchUrl,PixabaySearchUrl} from '../ProvidersURLS';

class Search extends Component{

	constructor(){

		super();
		
		this.state = {
			value: '',
			selectedEngine: 'Flickr'
		}

		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onHandleInputChange = this.onHandleInputChange.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
	}

	onHandleInputChange(e){

		this.setState({
			value:e.target.value
		});
	}

	onHandleSubmit(e){

		e.preventDefault();

		let searchUrl = null;

		if(this.state.selectedEngine === "Flickr"){
		
			searchUrl = FlickrSearchUrl(this.state.value);
		}
		else if(this.state.selectedEngine === "Pixabay"){
		
			searchUrl = PixabaySearchUrl(this.state.value);
		}

		this.props.requestPhotos(this.state.value, searchUrl, this.state.selectedEngine);
		
	}

	onHandleChange(e){

		e.preventDefault();

		this.setState({
			selectedEngine: e.target.value
		});

	}

	render(){
		
		let searchBtn = (this.state.value.length === 0) ? <input 
															className="submit_input"
										                    type="submit"
										                    value="Search"
										                    disabled/> : <input 
										                    				className="submit_input"
															                type="submit"
															                value="Search"/>; 		

		 return (
			 	<form className="form_section" onSubmit={this.onHandleSubmit}>
					<input 
						type="text" 
						className="text_input"
						placeholder="Search photos..."
						value={this.state.value} 
						onChange={this.onHandleInputChange}/>
					<select className="select_box" value={this.state.selectedEngine} onChange={this.onHandleChange}>
			            <option value="Flickr">Flickr</option>
			            <option value="Pixabay">Pixabay</option>
			        </select>
	             	{searchBtn}  
	            </form>
         )
	}
}

export default Search;