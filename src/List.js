import React, { Component } from 'react';
import ListItem from './ListItem.js'

class List extends Component{
    finishChange = (obj) => {
        this.props.onCheckChange(obj);
    };

    deleteChange = (e) => {
        this.props.deleteChange(e);
    };
    
    render(){
        return(
            <ul>
                <span>{this.props.name} {this.props.num}</span>
                {this.props.List.map((item, index) =>
                    <ListItem
                        item={item}
                        onFinishChange={this.finishChange}
                        onDeleteChange={this.deleteChange}
                        key={index}
                    />
                )}
            </ul>
        );
    }
}

export default List;