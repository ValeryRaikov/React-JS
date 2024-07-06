import { useState, useEffect } from "react";

const baseUrl = 'https://swapi.dev/api';

export default function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <>
            <h1>Characters</h1>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}