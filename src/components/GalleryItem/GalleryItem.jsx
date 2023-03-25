import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ image }) {
    const [toggle, setToggle] = useState(true);

    console.log('inside galleryItem', toggle);
    return (
        <button className='img' onClick={() => {
            setToggle(!toggle);
        }}>
            {toggle ?
            <img src={image.path} /> :
            <>
                <img src={image.path} className ="descriptionBackground"/>    
                <p className="description">{image.description}</p>
            </>
        }

        </button >    
        )
}

export default GalleryItem;

{/* <div>
    <img src={image.path} />
</div> 
toggle ?
                    
                        :
                        (<div>
                    <span>{image.description}</span>
                </div >)*/}