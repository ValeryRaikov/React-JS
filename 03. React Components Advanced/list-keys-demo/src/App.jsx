import './App.css'
import BooksList from './components/BooksList'
import MoviesList from './components/MoviesList'

function App() {

  return (
    <>
      <MoviesList heading='My movie list'/>
      <BooksList heading='My books list'/>
    </>
  )
}

export default App
