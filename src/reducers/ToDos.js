const ToDos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    finished: false
                }
            ]
        case 'CHANGE_TODO':
            return state.map(todo =>
                (todo.id === action.id) 
                ? {...todo, finished: !todo.finished}
                : todo
            )
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default ToDos;