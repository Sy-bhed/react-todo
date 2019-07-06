import React, { Component } from 'react';
import AddBar from './AddBar.js';
import List from './List.js';

class ToDoList extends Component{
    state = {
        list: [],
        addText: ''
    }

    checkChange = (obj) => {
        const { list } = this.state
        this.setState({
            list: list.map(item => {
                if (item.id === obj.id) {
                    return {
                        ...item,
                        status: obj.status
                    }
                }
                return item
            })
        })
    };

    deleteChange = (e) => {
        const { list } = this.state;
        const newList = list.filter(item => item.id !== e.id);
        this.setState({
            list: newList
        })
    };

    textChange = (addText) => {
        this.setState({
            addText
        });
    };

    addItem = (obj) => {
        console.log(obj)
        this.setState({
            list: [...this.state.list, obj]
        });
    };

    render(){
        const { list } = this.state;
        const UndoList = list.filter(item => item.status === 0);
        const DoneList = list.filter(item => item.status === 1);

        return(
            <div>
                <AddBar
                    addText={this.state.addText}
                    onAddTextChange={this.textChange}
                    addNewItem={this.addItem}
                />
                <List
                    name="正在进行"
                    num={UndoList.length}
                    List={UndoList}
                    onCheckChange={this.checkChange}
                    deleteChange={this.deleteChange}
                />
                <List
                    name="已经完成"
                    num={DoneList.length}
                    List={DoneList}
                    onCheckChange={this.checkChange}
                    deleteChange={this.deleteChange}
                />
            </div>
        );
    }
}

export default ToDoList;