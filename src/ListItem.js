import React, { Component } from 'react';

class ListItem extends Component{
    handleFinishChange = (e) => {
        const { item } = this.props;
        const status = e.target.checked ? 1 : 0;
        const obj = {
            id: item.id,
            name: item.name,
            status: status
        }
        this.props.onFinishChange(obj);
    };

    render(){
        const { item, onDeleteChange } = this.props;

        return(
            <li key={item.id}>
                <span>
                    <input
                        type="checkbox"
                        onChange={this.handleFinishChange}
                        checked={item.status}
                    />
                </span>
                <span>{item.name}</span>
                <span onClick={() => onDeleteChange(item)}>删除</span>
            </li>
        );
    }
}

export default ListItem;