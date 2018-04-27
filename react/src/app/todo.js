const React = require('react');
const ReactDOM = require('react-dom');
require('./css/index.css');
import { Link } from 'react-router-dom'

//module require
const TodoItem = require('./TodoItem');
const AddItem = require('./AddItem');
const About = require('./about');

// create component
class TodoCompoenent extends React.Component {

  constructor () {
    super()
    this.state = {
      todos: ['wash up', 'eat cheese', 'take a nap', 'spin on motorbike'],
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  };

  render() {
    var todos = this.state.todos;
    todos = todos.map( (item, index) => {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    });

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
          <Link to={'/about'}>About</Link>
          <ul>{todos}</ul>
          <AddItem onAdd={this.onAdd} />
      </div>
    );
  };
  onDelete(item) {
    var updatedTodos = this.state.todos.filter( (val, index) => {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  };

  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  };
};

module.exports = TodoCompoenent;