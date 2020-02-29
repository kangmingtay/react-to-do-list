import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Typography, Container } from '@material-ui/core';


const App = () => {

  // argument instead useState stores the initial state 
  const [todos, setTodos] = useState([]);
  const [numTodos, setNum] = useState(todos.length);
  // console.log("List of todos: ", todos, numTodos, todos.length)

  useEffect(() => {
    let count = todos.length
    for(let i = 0; i < todos.length; i++) {
      if(todos[i][1]) {
        count--
      } 
      
    } 
    setNum(count)
  }, [todos])
  
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(todoText) => {
        let todoStatus = false // marks todo as not done yet
        let todoUpdateField = false
        let todo = [todoText, todoStatus, todoUpdateField]
        setTodos([...todos, todo])
      }}/>
      <Container>You have { numTodos } todos left to complete.</Container>
      <TodoList 
        todos={ todos } 
        deleteTodo={(index) => {
          const newTodos = todos.filter((_, i) => i !== index)
          setTodos(newTodos);
        }}
      />
    </div>
  );
}

export default App;
