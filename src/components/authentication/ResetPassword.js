import React from 'react'
import  { ResetPasswordDiv } from '../../styles'

export default function ResetPassword({ hideResetPassword }) {
  return (
    <ResetPasswordDiv>
      <button onClick={hideResetPassword}>
        <i className="fas fa-arrow-left"></i> Go Back
      </button>
      <form>        
        <label>
          Enter an email and we will send your new password:
          <input type="email" required />
        </label>
        <button type="submit"> Send New Password </button>
      </form>
    </ResetPasswordDiv>
  )
}
