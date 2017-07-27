import React from 'react';
import faker from 'faker';

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

const Counter = (props) => {
  return(
    <div>
      <h1>Counter</h1>
      <h3> counter: { props.counter } </h3>
      <button onClick ={
        () => props.increaseCount() }> Increase Count </button>
      <button onClick={
        () => props.decreaseCount() }> Decrease Count </button>
    </div>
  )
}

class PlaygroundApp extends React.Component {

  state = {
    name: "Davis",
    counter: 0,
    users: null,
    showCounter: true
  }

  increaseCount = this.increaseCount.bind(this)

  componentDidMount(){
    this.fetchUsersFromServer();
    const randomName = faker.name.firstName();
    const randomProd = faker.commerce.product();
    console.log(randomName, "loves", randomProd);
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

  increaseCount(){
    this.setState({ counter: this.state.counter += 1})
  }

  decreaseCount = () => {
    this.setState({ counter: this.state.counter -= 1})
  }

  toggleCounter(){
    this.setState({ showCounter: !this.state.showCounter })
  }

  render() {
    return (
      <div>
        <button className={ this.state.showCounter ? "open-btn" : "close-btn" }
         onClick={ () => this.toggleCounter() }>
         { this.state.showCounter ? "Hide Counter" : "Show Counter" }
        </button>

        {
          this.state.showCounter
          ? <Counter
              counter={ this.state.counter }
              increaseCount={ this.increaseCount }
              decreaseCount={ this.decreaseCount }
            /> : null
        }

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
