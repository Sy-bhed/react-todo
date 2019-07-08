import React from 'react';

const ListItem = ({ onChange, onClick, finished, text }) => (
    <li>
        <span>
            <input
                type="checkbox"
                onChange={onChange}
                checked={finished}
            />
        </span>
        <span>{text}</span>
        <span onClick={onClick}>删除</span>
    </li>
)

export default ListItem;