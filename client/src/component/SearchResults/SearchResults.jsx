import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Loading from '../Loading';


export default function SearchResults(props) {

    // const [mintime, setMintime] = useState({});
    console.log(props);

    const data = props.childMovie.map((movie) => {
        return (
            <div>
                <p>{movie.title}</p>
            </div>
        )
    })

    return (
        <>
            {data}
            {/* {props.some.map((movie) => (
                <div className="propsDiv">
                    <img style={{ width: "200px" }} src={movie.poster_path}
                        alt='' />
                    <div className="movieName">
                        <h4>{movie.title}</h4>
                        <span> <p>{movie.vote_average}</p></span>
                    </div>
                </div>


            ))} */}

        </>



    )
}
