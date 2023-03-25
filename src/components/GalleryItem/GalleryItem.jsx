import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ image, getGallery }) {
    const [toggle, setToggle] = useState(true);
    const [likes, setLikes] = useState(0);
    // const [gallery, setGallery] = useState([]);

    function addLike(){
        axios.put(`/gallery/like/${image.id}`)
            .then(response => {
                console.log('back from server');
                getGallery();
                setLikes(image.likes);
            }).catch(err => {
                alert('there was an issue')
            })
    }
    console.log('inside galleryItem', toggle);
    return (
        <div className="galleryItem">
            <button className='img' onClick={() => {
                setToggle(!toggle);
            }}>
                {toggle ?
                    <img src={image.path} /> :
                    <>
                        <img src={image.path} className="descriptionBackground" />
                        <p className="description">{image.description}</p>
                    </>
                }
            </button >
            <button className="likeBtn" onClick={addLike}>Like</button>
            <p className="likes">{likes} people like this!</p>
        </div>
    )
}

export default GalleryItem;

