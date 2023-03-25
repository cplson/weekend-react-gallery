import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";
function GalleryList({gallery, getGallery}){
    
    return(       
        gallery.map(image => <GalleryItem key={image.id} image={image} getGallery={getGallery}/>)
        )
        
}

export default GalleryList;