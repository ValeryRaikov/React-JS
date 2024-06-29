import MovieListItem from "./MovieListItem";

export default function Movies(props) {
    console.log(props);
    console.log(props.movies[0]);

    return (
        <>
            <h1>{props.title}</h1>

            <ul>
                <MovieListItem title={props.movies[0]} />
                <MovieListItem title={props.movies[1]} />
                <MovieListItem title={props.movies[2]} />
                <MovieListItem title={props.movies[3]} />
            </ul>
        </>
    );
}