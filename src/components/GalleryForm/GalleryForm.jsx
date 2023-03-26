import axios from 'axios';
import { useState } from 'react';

function GalleryForm({getGallery}) {
    console.log('inside GalleryForm');
    const [formInput, setFormInput] =
        useState({
            title: '',
            path: '',
            description: ''
        })

    const addGalleryItem = () => {
        axios.post('/gallery', formInput).then(response => {
            console.log('posted item to db');
            getGallery();
        }).catch(err => {
            alert('There was an issue connecting to the server for post');
            console.log(err);
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log('form data before post', formInput);
        addGalleryItem();
        clearSubmitFields();
    }

    const clearSubmitFields = () => {
        setFormInput({
            title: '',
            path: '',
            description: ''
        })
    }

    return (
        <form action="">
            <label htmlFor="">Title:</label>
            <input type="text" placeholder="title" value={formInput.title}
                onChange={event => setFormInput(
                    {
                        title: event.target.value,
                        path: formInput.path,
                        description: formInput.description
                    })} />
            <label htmlFor="">Gallery Item URL:</label>
            <input type="text" placeholder="url" value={formInput.path}
                onChange={event => setFormInput(
                    {
                        title: formInput.title,
                        path: event.target.value,
                        description: formInput.description
                    })} />
            <label htmlFor="">Description:</label>
            <input type="text" placeholder="description" value={formInput.description}
                onChange={event => setFormInput(
                    { 
                        title: formInput.title,
                        path: formInput.path,
                        description: event.target.value 
                    })} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default GalleryForm;