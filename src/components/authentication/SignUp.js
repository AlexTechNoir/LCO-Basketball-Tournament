import React from 'react'
import { SignUpForm } from '../../styles'

export default function SignUp() {
  return (
    <SignUpForm>
      <label>
        Email:
        <input type="email" required />
      </label>
      <label>
        Name:
        <input type="text" required />
      </label>
      <label>
        Password:
        <input type="password" required />
      </label>
      <label>
        Confirm password:
        <input type="password" required />
      </label>
      <button type="submit">Submit</button>
    </SignUpForm>
  )
}
