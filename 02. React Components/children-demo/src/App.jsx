import './App.css'
import BookList from './components/BookList'
import BookTable from './components/BookTable'

function App() {
  return (
    <>
      <BookList name="My book list:" />
      <BookTable name = 'My book table:' />
    </>
  )
}

export default App
