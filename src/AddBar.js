import React, { Component } from 'react';

class AddBar extends Component{
    handleAddTextChange = (e) =>{
        this.props.onAddTextChange(e.target.value);
    };

    handleKeyUp = (e) =>{
        if(e.key === 'Enter'){
            const newId = + new Date();
            const value = this.props.addText;
            if(value !== ''){
                var obj = {
                    id: newId,
                    name: value,
                    status: 0
                };
                this.props.onAddTextChange('');
                this.props.addNewItem(obj);
            }
        }
    };

    render(){
        return(
            <p>
                ToDoList
                {' '}
                <input 
                    type="text" 
                    placeholder="添加ToDo"
                    value={this.props.addText}
                    onChange={this.handleAddTextChange}
                    onKeyUp={this.handleKeyUp}
                />
            </p>
        );
    }
}

export default AddBar;