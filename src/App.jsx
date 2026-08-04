import { useState } from 'react';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" }
];

function App() {
  //state set up
  const [todoList, setTodoList] = useState([]);

  //handler event
  function addTodo(todoTitle) {
    const newTodo = {
      id: Date.now(),
      title: todoTitle
    };

    //updating state using the functional form
    setTodoList(previous => [...previous, newTodo]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;