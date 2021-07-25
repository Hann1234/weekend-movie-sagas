import React from 'react';
import {  useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";

function Details() {

    const movieID = useSelector(store => store.movieID);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    // const {id} = useParams(); 

    const history = useHistory();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_GENRES', payload: id});
    // }, []);

    const handleClick = () => {
        history.push('/');
    }

    console.log(genres);

    return ( // so in order to get the bellow to work with using ID-1 as the index, the table has to be ordered by 'id' not by 'name'. I have to use useParams to be able to sort by name.
        <div>
            <h3>{movies[movieID-1].title}</h3>
            <img src={movies[movieID-1].poster} />
            <h5>Genres:</h5>
                <ul>
                    {genres.map((item) => {
                 // must return each item!
                    return <li key={item.id}>{item.name}</li>;
                    })}
                </ul>
            <p>{movies[movieID-1].description}</p>
            <button onClick={() => handleClick()}>Return</button>
        </div>
    )
}

export default Details;