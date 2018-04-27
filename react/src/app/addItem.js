const React = require('react');
require('./css/addItem.css');

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newItem = React.createRef();
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  };

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hitme" />
      </form>
    );
  };
};

module.exports = AddItem;