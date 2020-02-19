import React from 'react';
import { useState } from 'react';
import './App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Typography } from '@material-ui/core';


const App = () => {

  // argument instead useState stores the initial state 
  const [todos, setTodos] = useState([]);
  console.log(todos)
  
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(todoText) => {
        setTodos([...todos, todoText])
      }}/>
      <TodoList todos={ todos } deleteTodo={(index) => {
          setTodos(todos.filter((_, i) => i != index));
        }}/>
    </div>
  );
}

export default App;
