import { connect } from 'react-redux';
import { changeTodo, deleteTodo } from '../actions/index';
import List from '../components/List'

const mapStoreToProps = state => ({
    ToDos: state
})
const mapDispatchToProps = dispatch => {
    return {
        changeTodo: id => {
            dispatch(changeTodo(id))
        },
        deleteTodo: id => {
            dispatch(deleteTodo(id))
        }
    }
}

const TodoList = connect(mapStoreToProps, mapDispatchToProps)(List)

export default TodoList;