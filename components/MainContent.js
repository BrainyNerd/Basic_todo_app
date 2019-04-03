import React from 'react';
import TodoItem from "./TodoItem";
import TodoData from "../todoData";


class MainContent extends React.Component{

    constructor(){
        super();
        this.state = {
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id == id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }


    render() {
        const todoData = this.state.todos;
        const todoItems = todoData.map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem} handleChange={this.handleChange}/>)
        return (
            <main>
                <div className="todo-list">{todoItems}</div>
            </main>
        )
    }
}

export default MainContent