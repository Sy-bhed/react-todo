import React, { Component } from 'react';
import ListItem from './ListItem.js'

class List extends Component{
    
    render(){
        const { onCheckChange, deleteChange } = this.props
        return(
            <ul>
                <span>{this.props.name} {this.props.num}</span>
                {this.props.List.map((item, index) =>
                    <ListItem
                        item={item}
                        onFinishChange={onCheckChange}
                        onDeleteChange={deleteChange}
                        key={index}
                    />
                )}
            </ul>
        );
    }
}

export default List;