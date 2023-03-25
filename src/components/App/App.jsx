import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

// import components
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';



function App() {

  // state for gallery
  const [gallery, setGallery] = useState([]);

  // on page load GET gallery,
  // and set the state to the response data
  useEffect(() => {
    getGallery();
  }, [])

  // Get gallery items
  function getGallery(){
    axios.get('/gallery').then(response => {
      // console.log(response.data);
      setGallery(response.data);
      // console.log(gallery);
    }).catch(err => {
      alert('there was a problem getting the data from the server', err);
    })
  }

  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div>
          <GalleryList gallery={gallery}/>
        </div>
      </div>
    );
}

export default App;
