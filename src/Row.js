import React, {
    useState,
    useEffect
} from 'react';
import axios from './axios.js';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({
    title,
    fetchURL,
    isLargeRow
}) {
    const [movies, setMovies] = useState([]);

    // Code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.table(movies);

    return ( 
        <div className = "row">
         <h2 > {title } </h2>

        <div className = "row_posters" > 
            { /* row_poster(s) */ } 
            {movies.map(movie => (
                <img key = {movie.id} 
                className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/>
            ))
        }

        </div>
        {/* container -> posters */ }
        </div>
    )
}

export default Row