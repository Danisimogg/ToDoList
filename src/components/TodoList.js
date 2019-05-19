import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export default class TodoList extends React.Component {
        state = {
            todos: [],
            todoToShow: "all"
        };

        addTodo = (todo) => {
            this.setState({
                todos: [todo, ...this.state.todos]
            });
        };
        toggleComplete = (id) => {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        //suppose to update
                        return {
                            ...todo,
                            complete: !todo.complete
                            // id:todo.id,
                            // text : todo.text,
                            // complete: !todo.complete
                        };
                    } else {
                        return todo;
                    }
                })
            });
        };
        updateTodoToShow = (s) => {
            this.setState({
                todoToShow: s
            })
        }
    render(){
let todos = [];

if(this.state.todoToShow === "all"){
    todos = this.state.todos;
} else if (this.state.todoToShow === "active"){
    todos = this.state.todos.filter(todo => !todo.complete);
}else if (this.state.todoToShow === "complete"){
    todos = this.state.todos.filter(todo => todo.complete);
}

        return (
        <div>
            <TodoForm onSubmit={this.addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} 
                toggleComplete={() => this.toggleComplete(todo.id)}
                todo = {todo} />
            ))}
            <div> todos left : {this.state.todos.filter(todo => !todo.complete).length}</div>
            <div>
               <button onClick={() => this.updateTodoToShow("all")}>all</button>
               <button onClick={() => this.updateTodoToShow("active")}>active</button>
               <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
            </div>
            </div>
        );
    }
}