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

    handleDelete = () => {
        const { item } = this.props;
        this.props.onDeleteChange(item);
    };

    render(){
        const item = this.props.item;

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
                <span onClick={this.handleDelete}>删除</span>
            </li>
        );
    }
}

export default ListItem;