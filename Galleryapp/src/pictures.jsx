import React, { Component } from 'react';
import PropTypes from "prop-types";

const Pictures = ({imageSrc,overlayCallback,imageSize}) => {
    const {server,id,secret,title}  = imageSrc;
    const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}_${imageSize}.jpg`;

    const overlay = () => {
        overlayCallback(imageSrc)
    }

    return (
        <div  className={'image-cell'}>
            <img onClick={overlay} src={imageUrl} alt={title}></img>
        </div>
     );
}
 
export default Pictures;

Pictures.propTypes={
    imageSrc:PropTypes.object,
    overlayCallback:PropTypes.func,
    imageSize: PropTypes.string
}

Pictures.defaultProps={
    imageSrc:{},
    imageSize:'w'
}