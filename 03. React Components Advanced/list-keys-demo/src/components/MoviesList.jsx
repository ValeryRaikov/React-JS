import { useState } from "react";

export default function MoviesList(props) {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Christ',
        'Lord of the Rings',
    ]);

    const [showMovies, setShowMovies] = useState(false);

    const displayMovies = () => {
        setShowMovies(true);
    }

    const changeMovies = () => {
        setMovies((prevMovies) => {
            const newMovies = [...prevMovies];
            newMovies[1] = 'Star Wars';
            newMovies.push('Need for speed');
            newMovies.shift();

            return newMovies;
        });
    }

    return (
        <>
            <h1>{props.heading}</h1>

            <button type="submit" onClick={displayMovies}>Display</button>
            <button type="submit" onClick={changeMovies}>Change</button>

            {showMovies && (
                <ol>
                    {movies.map(movie => <li key={movie}>{movie}</li>)}
                </ol>
            )}
        </>
    );
}