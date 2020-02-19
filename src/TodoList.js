import React from 'react'
import { useState } from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <ListItemText> { todo } </ListItemText>
                    <ListItemSecondaryAction>
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