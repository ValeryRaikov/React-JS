import './App.css'
import Timer from './components/Timer';
import Counter from './components/Counter';
import Test from './components/Test';

function App() {
  return (
    <>
      <Timer />
      <Counter />
      <Test title='Test list' text='demo text' />
    </>
  )
}

export default App
