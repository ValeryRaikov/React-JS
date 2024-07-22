import './App.css'
import ControlledForms from './components/ControlledForms'
import TailwindForm from './components/TailwindForm'
import UncontrolledForms from './components/UncontrolledForms'

function App() {
  return (
    <>
      <UncontrolledForms />
      <ControlledForms />
      <hr />
      <TailwindForm />
    </>
  )
}

export default App
