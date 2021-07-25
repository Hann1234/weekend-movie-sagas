import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function AddMovie() {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const allGenres = useSelector(store => store.allGenres);

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_GENRES' });
    }, []);

    const handleChange = (event) => {
     setGenre(event.target.value);
    };
    
    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

       // alert user to fill in missing input field

       if (!title || !poster || !description || !genre) {
        alert('Please enter all input fields.')
        }
        
        else {
        // Tell redux that we want to add new info
        dispatch({
            type: 'ADD_MOVIE',
            // Pass in the information, that we're tracking in state
            payload: {title, poster, description, genre}
        });

        // Clear the form field
        setTitle('');
        setPoster('');
        setDescription('');
        setGenre('');
        // direct browser to next route
        history.push('/');
        }
   };

   const handleClick = () => {
    history.push('/');
}

//    console.log(allGenres);

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
            <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Genre</InputLabel>
                    <Select
                    labelId="select-label"
                    id="select"
                    value={genre}
                    onChange={handleChange}
                    >
                        {allGenres.map((item) => {
                            return (
                            <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            )
                        })}
                    </Select>
                <button type="submit">Save Movie</button>
            </FormControl>
          </form>
          <button onClick={() => handleClick()}>Cancel</button>
        </div>
      )
}

export default AddMovie;