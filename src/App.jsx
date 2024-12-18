import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todo } from './components/Todo';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);


  async function fetchTodos() {
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    setTodos(json.todos);
  }
    
  fetchTodos();


  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
}

export default App;
