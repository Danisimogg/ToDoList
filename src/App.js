import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style/style.css';
import TodoList from "./components/TodoList"
import ValiationForm from "./components/ValidationForm"
class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });

  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
      return (
    <div className="App">
      <TodoList /> 
      <div> <ValiationForm /></div>
     
    </div>

  );
}
}
export default App;
