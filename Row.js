import React, { useEffect, useState } from 'react';
import axios from './Axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_Url = "https://image.tmdb.org/t/p/original/";

// ... (import statements)

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            try {
                const url = await movieTrailer(movie?.name || "");
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            } catch (error) {
                console.error("Error getting trailer URL:", error);
            }
        }
    };

    return (
        <div>
            <div className='row'>
                <h2 className='title'>{title}</h2>
                <div className={`row__posters ${isLargeRow && "row__posterLarge"}`}>
                    {movies.map((movie) => (
                        <img
                            className="row__posters"
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    ))}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;
