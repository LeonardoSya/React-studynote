import { useState } from 'react'
import './App.css'

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Leo')
  const [lastName, setLastName] = useState('Sya')

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? <input
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value)
          }}
        /> : (<b>{firstName}</b>)}
      </label>
      <br />
      <label>
        Last name:{' '}
        {isEditing ? <input
          value={lastName}
          onChange={e => {
            setLastName(e.target.value)
          }}
        /> : (<b>{lastName}</b>)}
      </label>
      <br />
      <button type='submit'>
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName}{lastName}</i></p>
    </form>
  )
}