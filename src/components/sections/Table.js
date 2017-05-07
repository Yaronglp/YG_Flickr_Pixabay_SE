import React from 'react';
import {FlickrSearchUrl,PixabaySearchUrl} from '../ProvidersURLS';
import ResizeSections from '../ResizeSections';

export default function Table(props){

	let tableBody = props.searchDataHistory.map((item, index) => {
			
					let searchURL;

					if(item.service === 'Flickr'){

						searchURL = FlickrSearchUrl(item.searchTerm);
					}
					else if(item.service === 'Pixabay'){

						searchURL = PixabaySearchUrl(item.searchTerm);
					}
		
					return (
						<tr key={index} className="clickable_row" onClick={() => {props.requestPhotos(item.searchTerm, searchURL, item.service);}}>
							<td title={item.searchTerm} className="long_td truncate">{item.searchTerm}</td>
							<td>{item.service}</td>
							<td>{item.time}</td>
							<td>{item.numberOfResults}</td>
						</tr>
					);
				});	
				
	ResizeSections(props.searchDataHistory.length);

	let dummyTdClassName = "dummy_td " + (tableBody.length > 0 ? "" : "hide_dummy_td");

	return(
		<table className="table_history">
			<thead className="table_history_header">
				<tr>
					<td>Search term</td>
					<td>Service</td>
					<td>Time of search</td>
					<td>Number of results</td>
					<td className={dummyTdClassName}></td>
				</tr>
			</thead>
			<tbody>
				{tableBody}	
			</tbody>
		</table>
	);	
}