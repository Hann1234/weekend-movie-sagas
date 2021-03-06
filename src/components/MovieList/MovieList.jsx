import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const goToDetails = (id) => {
        dispatch({ type: 'MOVIE_ID', payload: id});
        dispatch({ type: 'FETCH_GENRES', payload: id});
        history.push(`/details`); // add /${id} to use useParams...idk, guess i might totally revamp my code 
    }

    const handleClick = () => {
        history.push('/addmovie');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={() => handleClick()}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => goToDetails(movie.id)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;