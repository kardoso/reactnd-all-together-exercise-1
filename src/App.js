import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NewUser from './Components/NewUser'
import ListUsers from './Components/ListUsers'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: []
  }

  addUser = user => {
    this.setState(oldState => ({
      users: [...oldState.users, user]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <NewUser users={this.state.users} addUser={this.addUser} />
        <ListUsers users={this.state.users} />
      </div>
    )
  }
}

export default App
