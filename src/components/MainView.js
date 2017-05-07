import React, {Component} from 'react';
import Title from './sections/Title';
import Search from './sections/Search';
import Button from './sections/Button';
import Table from './sections/Table';
import Photos from './sections/Photos';

let searchHistory = [];

class MainView extends Component{

	constructor(){

		super();

		this.state = {
			photosDataArr:[],
			photosEngine:"Flickr"
		}

		this.requestPhotos = this.requestPhotos.bind(this);		
	}

	requestPhotos(searchValue, searchUrl, serviceName){

		let cmp = this;

	    fetch(searchUrl)
	    	.then(response => {
	            if(response.ok && response.status === 200){
	                
	                return response.json();
	            }
	            throw new Error('Network response failed.');
	   		})
	    	.then(data => {
	    			
	    		if((data.photos && data.photos.total > 0) || (data.total &&  data.total > 0)){

	    			searchHistory.push({
	            	 'searchTerm' : searchValue,
					 'service' : serviceName,
					 'time' : new Date().toLocaleTimeString(),
					 'numberOfResults' : (serviceName === 'Flickr') ? data.photos.total : data.total
					});

		            cmp.setState({
		            	photosDataArr:(serviceName === 'Flickr') ? data.photos.photo : data.hits,
		            	photosEngine:serviceName
		            });
	    		}
	    		else{

	    			alert("No results found for: '" + searchValue + "'.");
	    		}

	    	})
	    	.catch(() => {
	        
	       		throw new Error('request has failed.');
	    	});   
	}

	clearTableHistory(){

		searchHistory = [];

		this.setState({
			photosDataArr:[]
		});

		console.log("Deleting history");

	}

	render(){

		return(
			<div>
				<div id="user_input_section" className="user_input_section">
					<Title label="Flickr Search Engine" cssClass="header_section"/>
					<Search requestPhotos={this.requestPhotos.bind(this)}/>
					<Button 
						btnType="button"
						shouldBeDisabled={searchHistory.length > 0}
						cssClass="clear_history_btn" 
						text="Clear History" 
						clickHandler={this.clearTableHistory.bind(this)}/>
					<Table searchDataHistory={searchHistory} requestPhotos={this.requestPhotos.bind(this)}/>
				</div>

				<div id="photos_section" className="photos_section">
					<Photos photosData={this.state.photosDataArr} engineService={this.state.photosEngine}/>
				</div>
			</div>
		);
	}
}
				
export default MainView;