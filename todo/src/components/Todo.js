import React, { Component } from "react";
import { connect } from "react-redux";

//actions
import { addTodo, toggleComplete } from '../actions'

//Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


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

      toggleFriend = (e, id) => {
        e.preventDefault();
        this.props.toggleComplete(id);
      };

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <div onClick={e => this.toggleFriend(e, todo.id)} key={todo.id}>
            {todo.task}
            {todo.completed && <FontAwesomeIcon icon={faStar} />}
            </div>
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
  { addTodo,  toggleComplete }
)(Todo);
