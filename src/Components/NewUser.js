import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NewUser extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    gamesPlayed: 0
  }

  changeFirstname = value => {
    this.setState(() => ({
      firstname: value
    }))
  }

  changeLastname = value => {
    this.setState(() => ({
      lastname: value
    }))
  }

  changeUsername = value => {
    this.setState(() => ({
      username: value
    }))
  }

  fieldAreEmpty = () => {
    return (
      this.state.firstname === '' ||
      this.state.lastname === '' ||
      this.state.username === ''
    )
  }

  submitForm = () => {
    if (this.props.users.map(u => u.username).includes(this.state.username)) {
      alert('This username is already taken')
      return
    }
    this.props.addUser(this.state)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First name"
          value={this.state.firstname}
          onChange={e => this.changeFirstname(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Last name"
          value={this.state.lastname}
          onChange={e => this.changeLastname(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.changeUsername(e.target.value)}
        />
        <br />
        <button
          type="submit"
          onClick={this.submitForm}
          disabled={this.fieldAreEmpty()}
        >
          Add user
        </button>
      </div>
    )
  }
}

NewUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

export default NewUser
