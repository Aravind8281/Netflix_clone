import React, { useEffect, useState } from "react";
import axios from "./Axios";
import Requests from "./Requests";
import "./Banner.css";
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(Requests.fetchRomanceMovies);
                const randomMovieIndex = Math.floor(Math.random() * request.data.results.length);
                setMovie(request.data.results[randomMovieIndex]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <header
            className="banner"
            style={{
                position: "relative",
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="buttons">
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
                <div className="banner__fadeBottom"></div>
            </div>
        </header>
    );
}

export default Banner;
