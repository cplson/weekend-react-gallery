import './GalleryForm.css';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function GalleryForm({ getGallery }) {
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
            <Container id="formContainer">
                <TextField margin="dense" label="title" variant="outlined" type="text" value={formInput.title}
                    required size="small"
                    onChange={event => setFormInput(
                        {
                            title: event.target.value,
                            path: formInput.path,
                            description: formInput.description
                        })} />

                <TextField margin="dense" label="url" variant="outlined" type="text" value={formInput.path}
                    required size="small"
                    onChange={event => setFormInput(
                        {
                            title: formInput.title,
                            path: event.target.value,
                            description: formInput.description
                        })} />

                <TextField margin="dense" label="description" variant="outlined" type="text" value={formInput.description}
                    required multiline size="small"
                    onChange={event => setFormInput(
                        {
                            title: formInput.title,
                            path: formInput.path,
                            description: event.target.value
                        })} />
                <Button startIcon={<LibraryAddIcon />} size="small" variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
            </Container>
        </form>
    )
}

export default GalleryForm;