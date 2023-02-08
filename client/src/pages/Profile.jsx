import React from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const auth = useAuth()
  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {auth.user.name}</p>
      <p><strong>Email:</strong> {auth.user.email}</p>
    </div>
  )
}

export default Profile
