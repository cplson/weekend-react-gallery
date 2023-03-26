import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ image, getGallery }) {
    const [toggle, setToggle] = useState(true);
    const [likes, setLikes] = useState(image.likes);
    // const [gallery, setGallery] = useState([]);

    function addLike() {
        axios.put(`/gallery/like/${image.id}`)
            .then(response => {
                console.log('back from server');
                getGallery();
                setLikes(image.likes);
            }).catch(err => {
                alert('there was an issue')
            })
    }

    function deleteItem() {
        axios.delete(`/gallery/remove/${image.id}`)
            .then(response => {
                console.log('removed item from the db');
                getGallery();
            }).catch(err => {
                alert('there was an issue deleting row from the db');
                console.log(err);
            });
    }
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
            <div className="btnDiv">
                <button className="likeBtn" onClick={addLike}>Like</button>
                <button className='deleteBtn' onClick={deleteItem}>Remove</button>
            </div>

            <p className="likes">{likes} people like this!</p>
        </div>
    )
}

export default GalleryItem;

