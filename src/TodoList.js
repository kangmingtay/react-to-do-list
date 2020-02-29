import React, { useState } from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TodoList = ({ todos, deleteTodo }) => {
    const [value, setValue] = useState({});
    

    return (
        <List>
            {todos.map((todo, index) => (
                /*
                    todo[0] --> todo item
                    todo[1] --> status of todo item
                    todo[2] --> editable state
                */
                <ListItem key={index.toString()} dense button>
                    <Checkbox onChange={() => todo[1] = !todo[1]}/>
                    <ListItemText>
                        {!todo[2] && <Typography align='center'>{ todo[0] }</Typography>}
                        {
                            todo[2] && 
                            <form 
                                align='center' 
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    todo[2] = !todo[2]
                                    todo[0] = value.index[0]
                                    setValue({...value, index: todo})
                                }}
                            >
                                <TextField 
                                    value={value.index[0]}
                                    onChange={(event) => {
                                        value.index[0] = event.target.value
                                        setValue({...value})
                                    }} 
                                />
                            </form>
                        }
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Edit"
                            onClick={() => {
                                todo[2] = !todo[2]
                                setValue({...value, index: todo})
                                console.log(value)
                            }}
                        >   
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => {
                                deleteTodo(index)
                            }}
                        >   
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                
            ))}
        </List>  
    )
}

export default TodoList;