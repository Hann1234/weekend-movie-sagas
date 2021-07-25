import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function AddMovie() {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

       // alert user to fill in missing input field

       if (!title || !poster || !description) {
        alert('Please enter all input fields.')
        }
        
        else {
        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_MOVIE',
            // Pass in the information, that we're tracking in state
            payload: {title, poster, description}
        });

        // Clear the form field
        setTitle('');
        setPoster('');
        setDescription('');

        // direct browser to next route
        history.push('/');
        }
   };

    return (
        <div>
          <h2>Add Movie:</h2>
          <form onSubmit={handleSubmit}>
          <input type="text" 
                placeholder="Enter Movie Title" 
                value={title} 
                onChange={event => setTitle(event.target.value)}/>
            <input type="text" 
                placeholder="Enter Movie Poster URL" 
                value={poster} 
                onChange={event => setPoster(event.target.value)}/>
            <input type="text" 
                placeholder="Enter Movie Description" 
                value={description} 
                onChange={event => setDescription(event.target.value)}/>
          <button type="submit">Save Movie</button>
          </form>
        
        </div>
      )
}

export default AddMovie;