import React from 'react';

export default function Photos(props){

  let photos = props.photosData.map(photo => {

    let imgSrc; 

    if(props.engineService === 'Flickr'){

      imgSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    }
    else if(props.engineService === 'Pixabay'){

      imgSrc = photo.webformatURL;
    }

    return (
      <span key={photo.id}>

        <a href={imgSrc} target="_blank">
          <img 
            className="result_image_size"
            src={imgSrc}
            alt={photo.title}/>
        </a>
      </span>  
    );  
  });

  return (
    <div>
      {photos}
    </div>
  );
};