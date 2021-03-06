var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    
    if (todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus()
    }
    this.refs.todoText.value = '';
  }
   render () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placholder="Enter Todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);