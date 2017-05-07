
const PHOTOS_PER_PAGE = 100;

export function FlickrSearchUrl(searchValue) {
	
	const API_KEY = 'put_your_api_key';
		
	let searchUrl = `https://api.flickr.com/services/rest/?
					     api_key=${API_KEY}&
					     method=flickr.photos.search&
					     format=json&
					     nojsoncallback=1&
					     per_page=${PHOTOS_PER_PAGE}&
					     page=1&
					     text=${searchValue}`;

	return searchUrl;					     
}

export function PixabaySearchUrl(searchValue){

	const API_KEY = 'put_your_api_key';
		
	let searchTermArr = searchValue.trim().split(" ");

	let term = "";

	searchTermArr.forEach((item) => {
		term += '+' + item; 
	});

	let searchUrl = `https://pixabay.com/api/?
						key=${API_KEY}&
						image_type=photo&
						per_page=${PHOTOS_PER_PAGE}&
						q=${term}`;

	return searchUrl;	

}