import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../slices/userSlice' // Adjust path as needed

function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.userInfo.users)

  function handleDelete(index) {
    dispatch(deleteUser(index))
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <p>{user.email}</p>
          <p>{user.contact}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Users
