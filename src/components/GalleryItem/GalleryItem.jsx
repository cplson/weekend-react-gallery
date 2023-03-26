import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

// import material ui components
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <ButtonGroup className="btnDiv">
                <Button startIcon={<FavoriteIcon />} size='small' variant="contained" color="primary" className="likeBtn" onClick={addLike}>Like</Button>
                <Button startIcon={<DeleteIcon />} size='small' variant ="contained" color="error" className='deleteBtn' onClick={deleteItem}>Remove</Button>
            </ButtonGroup>

            <p className="likes">{likes} people like this!</p>
        </div>
    )
}

export default GalleryItem;

