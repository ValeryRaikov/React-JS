import { useEffect } from "react";
import { useState } from "react";

const baseUrl = 'https://swapi.dev/api';

export default function Starships() {
    const [starship, setStarship] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    useEffect(() => {
        fetch(`${baseUrl}/starships/${currentIndex}`)
        .then(response => response.json())
        .then(data => setStarship(data))
        .catch(err => console.error('Error fecthing data:', err));
    }, [currentIndex]);

    const displayStarshipHandler = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <h1>Starships</h1>

            <button onClick={() => displayStarshipHandler(2)}>Starship 1</button>
            <button onClick={() => displayStarshipHandler(3)}>Starship 2</button>
            <button onClick={() => displayStarshipHandler(5)}>Starship 3</button>
            <button onClick={() => displayStarshipHandler(9)}>Starship 4</button>
            <button onClick={() => displayStarshipHandler(10)}>Starship 5</button>

            {starship && (
                <div>
                    <h2>{starship.name}</h2>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Cost in Credits: {starship.cost_in_credits}</p>
                    <p>Length: {starship.length}</p>
                    <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo Capacity: {starship.cargo_capacity}</p>
                </div>
            )}
        </>
    );
}