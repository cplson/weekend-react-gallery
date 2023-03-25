import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";
function GalleryList({gallery}){
    
    return(       
        gallery.map(image => <GalleryItem key={image.id} image={image}/>)
        )
        
}

export default GalleryList;