import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import './../assets/style/style.css';
export default class TodoList extends React.Component {
        state = {
            todos: [],
            todoToShow: "all",
            toggleAllComplete: true
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
            });
        };
        handleDeleteTodo = id =>{
            this.setState({
                todos: this.state.todos.filter(todo => todo.id !== id)
            });
        };
        removeAllTodosThatAreComplete = () =>{
            this.setState({
                todos: this.state.todos.filter(todo => !todo.complete)
            })
        }
        render() {
                let todos = [];
if (this.state.todoToShow === "all") {
    todos = this.state.todos;
} else if (this.state.todoToShow === "active") {
    todos = this.state.todos.filter(todo => !todo.complete);
} else if (this.state.todoToShow === "complete") {
    todos = this.state.todos.filter(todo => todo.complete);
}

return (
        <div>
                  <header> <div> todos left : {this.state.todos.filter(todo => !todo.complete).length}</div></header>
                  <main>
            <TodoForm onSubmit={this.addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} 
                toggleComplete={() => this.toggleComplete(todo.id)}
                onDelete = {() => this.handleDeleteTodo(todo.id)}
                todo = {todo} />
            ))}
     
            <div>
               <button class = "all" onClick={() => this.updateTodoToShow("all")}>all</button>
               <button  class = "active" onClick={() => this.updateTodoToShow("active")}>active</button>
               <button  class = "complete" onClick={() => this.updateTodoToShow("complete")}>complete</button>
            </div>
           {this.state.todos.some(todo => todo.complete) ? (
           <div>
                <button class = "removeAll" onClick = {this.removeAllTodosThatAreComplete}>remove all complete todos</button>
           </div>) : null}
           <div>
               <button class = "toggleAll" onClick = {() => 
               this.setState ({
                   todos: this.state.todos.map(todo =>({
                   ...todo,
                   complete: this.state.toggleAllComplete
               })),
               toggleAllComplete: !this.state.toggleAllComplete
            })
            }>toggle all complete: {`${this.state.toggleAllComplete}`}</button>
            
           </div>
           </main>
            </div>
            
        );
    }
}