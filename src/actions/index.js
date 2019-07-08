export const addTodo = text => ({
    type: 'ADD_TODO',
    id: + new Date(),
    text
})

export const changeTodo = id => ({
    type: 'CHANGE_TODO',
    id
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})