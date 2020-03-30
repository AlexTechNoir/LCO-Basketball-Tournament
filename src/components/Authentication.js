import React, { useState } from 'react'
import { DivAuthWrapper } from '../styles'

import LogIn from './authentication/LogIn'
import SignUp from './authentication/SignUp'
import ResetPassword from './authentication/ResetPassword'

export default function Authentication({ authClass, isLogInTabVisible, showLogInModal, showSingUpModal, closeAuth }) {
  const [ isResetPasswordVisible, setIsResetPasswordVisible ] = useState(false)

  const showResetPassword = e => {
    e.preventDefault()
    setIsResetPasswordVisible(true)
  }

  const hideResetPassword = () => {
    setIsResetPasswordVisible(false)
  }

  return (
    <DivAuthWrapper className={authClass} id="auth" onClick={closeAuth}>
      <div>
        <div>
          {
            !isResetPasswordVisible
            ? (
              <div>
                <button
                  className={`btn ${isLogInTabVisible ? "btn-light" : ""}`}
                  onClick={showLogInModal}
                >
                  Log In
                </button>
                <button
                  className={`btn ${isLogInTabVisible ? "" : "btn-light"}`}
                  onClick={showSingUpModal}
                >
                  Sign Up
                </button>
              </div>
            )
            : <div> 
                Reset Password
              </div>
          }
          <div>
            {
              !isResetPasswordVisible
              ? (
                isLogInTabVisible 
                ? <LogIn showResetPassword={showResetPassword} /> 
                : <SignUp />
              )
              : <ResetPassword hideResetPassword={hideResetPassword} />
            }
          </div>
        </div>
      </div>
    </DivAuthWrapper>
  )
}
