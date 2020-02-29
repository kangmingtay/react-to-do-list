import React from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox onChange={() => todo[1] = !todo[1]}/>
                    <ListItemText>
                        <Typography align='center'>
                            { todo[0] }
                        </Typography>
                    </ListItemText>
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