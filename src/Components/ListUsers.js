import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListUsers extends Component {
  state = {
    showGamesPlayed: true,
    buttonText: 'Hide the Number of Games Played'
  }

  updateShowGames = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
      buttonText: this.state.showGamesPlayed
        ? 'Show the Number of Games Played'
        : 'Hide the Number of Games Played'
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.updateShowGames}>{this.state.buttonText}</button>
        <ul style={{ listStyleType: 'none' }}>
          {this.props.users.map(u => (
            <li key={u.username}>
              <p>
                {u.username} played{' '}
                {this.state.showGamesPlayed ? u.gamesPlayed : '*'} games
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ListUsers
