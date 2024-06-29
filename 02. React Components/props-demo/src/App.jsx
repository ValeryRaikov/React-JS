import './App.css'
import Movies from './components/Movies'

function App() {
  const movies = [
    'Star Wars',
    'Need for Speed',
    'Fast and Furious',
    'The Fallguy',
  ];

  return (
    <>
      <Movies movies={movies} title="My movies:" />
    </>
  )
}

export default App
