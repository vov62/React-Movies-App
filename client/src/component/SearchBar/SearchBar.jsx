import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading';
import MovieCard from '../MovieCard/MovieCard';
import './searchBar.css';


export default function SearchBar(props) {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const movieSearch = async (API) => {
        setIsLoading(true);
        await fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results[0])
                setIsLoading(false)
            });
    }

    const handleSubmit = (e) => {
        if (query !== '') {
            movieSearch(
                `http://localhost:4000/movie/${query}`
            )
            setQuery('')
        }
        e.preventDefault()
        console.log(query);
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    return (
        <>
            <div className='searchMovieInput'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search.." value={query} onChange={handleChange} />
                    <button type="submit"><FontAwesomeIcon icon='search' size='lg' color='chocolate' /></button>
                </form>

                {isLoading && <Loading />}
                {movies && <div className="movie-card">
                    <MovieCard poster_path={movies.poster_path} {...movies} key={movies.id} />
                </div>}

            </div>
        </>
    )
}