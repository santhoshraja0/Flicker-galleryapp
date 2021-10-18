import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import HomePage from './home';
import Pictures from './pictures';


const GalleryApp = () => {
const searchMethod = 'flickr.photos.search'
const sizeMethod = 'flickr.photos.getSizes'
const [search, setSearch] = useState('all');
const [response, setResponse] = useState([]);
const [selectedImage, setSelectedImage] = useState({});
const [toggleOverlay, setToggleOverlay] = useState(false);
const [sizeImage, setSizeImage] = useState(false);


useEffect(() => {
    serverRequest(requestObjectForImages(search,searchMethod),successImages)
},[search])


const serverRequest = async(reqPayload,callback) => {
    const responseData = await axios.get(`${process.env.REACT_APP_API_URL}`,{
        params:reqPayload
    });
    callback(responseData)

}

const successImages = (imageData) => {
    const photo = imageData?.data?.photos?.photo || [];
    setResponse(photo)
}

const requestObjectForImages = (searchText) => {
    return  {
        method:searchMethod,
        api_key: `${process.env.REACT_APP_API_KEY}` ,
        text: `${searchText}` ,
        format: 'json',
        nojsoncallback: '1'
    }
}

const reqImageSize = ({id}) => {
    return {
        method:sizeMethod,
        api_key: `${process.env.REACT_APP_API_KEY}` ,
        photo_id:id,
        format: 'json',
        nojsoncallback: '1'
    }
}

const createOverlay = async(currentSrc) => {
    setSelectedImage(currentSrc)
    await serverRequest(reqImageSize(currentSrc),bindingDimension)
    imageOverlay()
}

const bindingDimension = (sizeData) => {
    const photoSizeArray = sizeData?.data?.sizes?.size || [];
    const sizeImg = photoSizeArray.filter(img => img.label === "Medium" )
    if(sizeImg.length>0){
        setSizeImage(sizeImg[0]);
    }

}

const imageOverlay = () => {
    setToggleOverlay(!toggleOverlay)
}


return (
    <Fragment>
        <div className="container">
            <HomePage searchCallback={(search) => setSearch(search)}/>
            <div className="photo_grid">
                {response && response.map((photo,index) => <Pictures key={index} overlayCallback={createOverlay} imageSrc={photo} imageSize={'w'} ></Pictures> )}
            </div>
        </div>
        {selectedImage && <div className={'overlay'} style={{display:toggleOverlay? 'block' : 'none'}}>
            <div className={'headers'}>
                {sizeImage && <div className={'title'}>{selectedImage.title}<span className={'dimensions'}>(Dimensions: {sizeImage.width}x{sizeImage.height})</span></div> }
                <div className={'close'} onClick={imageOverlay}>X</div></div>
            <Pictures imageSrc={selectedImage} imageSize={'c'} ></Pictures>
        </div>}
    </Fragment>
);
}

 
export default GalleryApp;