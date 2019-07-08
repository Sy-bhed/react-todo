import React from 'react';
import ListItem from './ListItem';

const List = ({ ToDos, changeTodo, deleteTodo }) => {
    //console.log(props)
    const UndoList = ToDos.filter(todo => todo.finished === false);
    const DoneList = ToDos.filter(todo => todo.finished === true);

    return (
    <div>
        <p>
            正在进行
            {UndoList.length}
        </p>
        <ul>
            {UndoList.map(todo => (
                <ListItem 
                    key={todo.id}
                    {...todo}
                    onChange={() => changeTodo(todo.id)}
                    onClick={() => deleteTodo(todo.id)}
                />
            ))}
        </ul>
        <p>
            已经完成
            {DoneList.length}
        </p>
        <ul>
            {DoneList.map(todo => (
                <ListItem 
                    key={todo.id}
                    {...todo}
                    onChange={() => changeTodo(todo.id)}
                    onClick={() => deleteTodo(todo.id)}
                />
            ))}
        </ul>
    </div>
    
)}

export default List;