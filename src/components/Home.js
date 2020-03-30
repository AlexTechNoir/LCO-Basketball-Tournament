import React, { useState, useEffect } from 'react'
import { DivHome } from '../styles'

export default function Home({ scroll, showLogInModal, showSingUpModal }) {
  const [ taglineClass, setTaglineClass ] = useState('hidden')

  useEffect(() => {
    setTimeout(() => {
      setTaglineClass('animated bounceInLeft')
    }, 1200)
  }, [])

  return (
    <DivHome>
      <div>
        <a href="/#">
          <img src={require(`../img/logo.webp`)} alt="logo" />
        </a>
        <div>
          <button type="button" onClick={showLogInModal}>Log In</button>
          <button type="button" onClick={showSingUpModal}>Sing Up</button>
        </div>
      </div>
      <div>
        <div className="animated zoomInDown">
          Go fight for it team!
        </div>
        <div className={taglineClass}>
          Have an amazing basketball tournament!
        </div>
      </div>
      <div id="home" onClick={scroll}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivHome>
  )
}
