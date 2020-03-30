import React from 'react'
import { LogInForm } from '../../styles'

export default function LogIn({ showResetPassword }) {
  return (
    <React.Fragment>
      <LogInForm>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            Remember me
          </label>
        </div> 
        <button type="submit">Submit</button>
      </LogInForm>
      <hr />
      <a className="dropdown-item badge badge-light" href="/#" onClick={showResetPassword}> 
        Forgot Password?
      </a>
    </React.Fragment>
  )
}
