import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Loading from '../Loading';
import './mainContent.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MainContent() {

    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const moviesDisplay = async () => {
        try {
            setIsLoading(true);
            const api_url = `http://localhost:4000/movies`;
            await fetch(api_url)
                .then(res => res.json())
                .then(results => {
                    console.log(results.results)
                    setAllMovies(results.results)
                })
        } catch (err) {
            console.error('failed to fetch');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        moviesDisplay();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 4,
                    infinite: true,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='moviesContainer'>
            <div className='moviesCarousel'>
                {isLoading && <Loading />}
                <Slider {...settings}>
                    {allMovies && allMovies.filter(movie => movie.poster_path).map((movie) =>
                        <div className="movieProps" key={movie.id}>
                            <MovieCard poster_path={'https://image.tmdb.org/t/p/w300' + movie.poster_path} title={movie.title}
                                release_date={movie.release_date} vote_average={movie.vote_average} overview={movie.overview} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}
