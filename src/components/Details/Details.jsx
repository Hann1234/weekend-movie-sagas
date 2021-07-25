import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Details() {

    const movieID = useSelector(store => store.movieID);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const history = useHistory();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_GENRES', payload: id});
    // }, []);

    const handleClick = () => {
        history.push('/');
    }

    console.log(genres);

    return (
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