import { useEffect } from "react";
import { useState } from "react";

const baseUrl = 'https://swapi.dev/api';

export default function Planets() {
    const [planets, setPlanets] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`${baseUrl}/planets`);

            if (!response.ok) {
                return console.error('Error fetching data!');
            }

            const data = await response.json();
            
            setPlanets(data.results);
        }

        fetchCharacters();
    }, []);

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch(`${baseUrl}/films`);
            
            if (!response.ok) {
                return console.error('Error fetching data!');
            }

            const data = await response.json();

            setFilms(data.results);
        }

        fetchFilms();
    }, []);

    const getFilmTitle = (url) => {
        const film = films.find(film => film.url === url);
        return film ? film.title : 'Unknown';
    }

    return (
        <>
            <h1>Planets</h1>

            <ul>
                {planets.map(planet => <li key={planet.name}>{planet.name} - {planet.climate}
                    <ul>
                        <p>Films</p>
                        {planet.films.map((film, index) => (<li key={index}>{getFilmTitle(film)}</li>))}
                    </ul>
                </li>)}
            </ul>
        </>
    );
}