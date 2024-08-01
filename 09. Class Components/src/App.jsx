import './App.css'
import TodoList from './components/todo-list/TodoList'

const todos = [
  { task: 'Clean the floor', isDone: true, id: 1 },
  { task: 'Learn React', isDone: false, id: 2 },
  { task: 'Walk the dog', isDone: true, id: 3 },
  { task: 'Rest', isDone: false, id: 4 },
];

function App() {
  return (
    <>
      <h1>Class Components Demo</h1>
      <TodoList todos={todos} />
    </>
  )
}

export default App
