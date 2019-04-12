import React, { Component } from "react";
import { connect } from "react-redux";

//actions
import { addTodo } from '../actions'

class Todo extends Component {

    state = {
        newTodo: ""
      };

      handleChanges = e => {
        this.setState({ newTodo: e.target.value });
      };

      handleAddFriend = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
      };

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <div key={todo.id}>{todo.task}</div>
        ))}
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleAddFriend}>Add Task</button>
      </div>
    );
  }
}

// mapping the state on to this.props.todos
const mapStateToProps = state => ({
  todos: state.todo
});

export default connect(
  mapStateToProps,
  { addTodo }
)(Todo);
