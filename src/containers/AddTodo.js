import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <p>
            ToDoList
            {' '}
            <input 
                type="text" 
                placeholder="添加ToDo"
                ref={node => {
                    input = node
                }}
                onKeyUp={e => {
                    if(e.key === 'Enter' && input.value.trim()){
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }
                }}
            />
        </p>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo;