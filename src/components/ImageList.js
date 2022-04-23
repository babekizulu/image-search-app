//libraries
import React from 'react';
//styling
import './ImageList.css';
//components
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const {images} = props;
    
    const imageArr = images.map(image => <ImageCard key={image.id} image={image}/>);

    return <div className='image-list'>{imageArr}</div>;
}

export default ImageList;