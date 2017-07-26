import React from 'react';

// SMART APP / Container / has state

// DUMB APP / Presentational / return HTML

// this.setState({})

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <ul>
        {
          props.usersData.map((user, index) => {
            return <li key={ index }> {user.name} </li>
          })
        }
      </ul>
    </div>
  )
}

class PlaygroundApp extends React.Component {

  state = {
    name: "Davis",
    counter: 0,
    users: null
  }

  componentDidMount(){
    this.fetchUsersFromServer();
  }

  fetchUsersFromServer() {
    // pretend this is an AJAX function
    const users = [
      {name: "Doug", id: 1},
      {name: "Bob", id: 2},
      {name: "Sam", id: 3},
      {name: "Megatron", id: 4},
      {name: "Jessie", id: 5}
    ]

    setTimeout(() => {
      this.setState({ users: users })
    }, 3000);
  }

  increaseCounter(){
    this.setState({ counter: this.state.counter += 1})
  }

  decreaseCounter(){
    this.setState({ counter: this.state.counter -= 1})
  }

  render() {
    return (
      <div>
        <h1> My name is: {this.state.name} </h1>
        <h3> counter: {this.state.counter} </h3>
        <button onClick ={
          () => this.increaseCounter() }> Increase Counter </button>
        <button onClick={
          () => this.decreaseCounter() }> Decrease Counter </button>

        {
          this.state.users
          ? <UsersList usersData={ this.state.users } />
          : <h1> Users Being Loaded </h1>
        }

      </div>
    )
  }
}

export default PlaygroundApp;
