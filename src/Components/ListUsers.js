import React from 'react'
import PropTypes from 'prop-types'

function ListUsers(props) {
  return (
    <ul>
      {props.users.map(u => (
        <li key={u.username}>
          <p>Username: {u.username}</p>
          <p>Games Played:{u.gamesPlayed}</p>
        </li>
      ))}
    </ul>
  )
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ListUsers
