import React from 'react'

function User(props) {
     const userinfor = props.user;
  return (
    <div>
        <h1>Welcome to React JSX!</h1>
        <h1>Username is {userinfor.username}</h1>
    </div>
    
  )
}

export default User
