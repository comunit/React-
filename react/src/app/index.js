const React = require('react');
const ReactDOM = require('react-dom');
require('./css/index.css');
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//module require
const TodoItem = require('./TodoItem');
const AddItem = require('./AddItem');
const About = require('./about');
const TodoCompoenent = require('./todo');

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
           <Route exact path="/" component={TodoCompoenent}/>
           <Route path="/about" component={About}/>
        </Switch>
     </Router>
    );
  }
};

// put component into html
ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));