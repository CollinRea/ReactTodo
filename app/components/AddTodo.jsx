var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    
    if (todo.length > 0) {
      this.props.onAddTodo(todo);
    } else {
      this.refs.todo.focus()
    }
    this.refs.todo.value = '';
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todo" placholder="Enter Todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;