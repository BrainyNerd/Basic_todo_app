import React from 'react';

class TodoItem extends React.Component{

    render() {

        const completedTodoItemStyle = {
            fontStyle : "italics",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }

        return (
            <div style={{display: !this.props.todoItem.task && "none"}} className="todo-item">

                <input type="checkbox"
                       onChange={()=>{this.props.handleChange(this.props.todoItem.id)}}
                       checked={this.props.todoItem.completed}/>
                <p style={this.props.todoItem.completed ? completedTodoItemStyle : null} >{this.props.todoItem.task}</p>
            </div>
        )
    }

}
export default TodoItem