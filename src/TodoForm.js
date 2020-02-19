import React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const TodoForm = (props) => {
    const [value, setValue] = useState('');
    console.log(value)
    return (
        // saves value to props passed down 
        <form onSubmit={(event) => {
            event.preventDefault();
            props.saveTodo(value);
        }}>  
            <TextField 
                variant="outlined" 
                placeholder="Add Todo" 
                margin="normal"
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                value={value} 
            />
        </form>
    );
};

export default TodoForm