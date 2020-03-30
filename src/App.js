import React, { useState, useRef } from 'react'
import { DivGrid } from './styles'

import Home from './components/Home'
import Authentication from './components/Authentication'
import Tournament from './components/Tournament'
import Team from './components/Team'
import Video from './components/Video'
import Faq from './components/Faq'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'

export default function App() {
  const [ authClass, setAuthClass ] = useState('invisible')
  const [ isLogInTabVisible, setIsLogInTabVisible ] = useState(null)

  const tournamentRef = useRef(null)
  const teamRef = useRef(null)
  const videoRef = useRef(null)
  const faqRef = useRef(null)
  const contactsRef = useRef(null)
  const aboutUsRef = useRef(null)

  const scroll = e => {
    if (e.currentTarget.id === 'home') {
      tournamentRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'tournament') {
      teamRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'team') {
      videoRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'video') {
      contactsRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'contacts') {
      faqRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'faq') {
      aboutUsRef.current.scrollIntoView()
    }
  }

  const showLogInModal = () => {
    setAuthClass('visible')
    setIsLogInTabVisible(true)
  }

  const showSingUpModal = () => {
    setAuthClass('visible')
    setIsLogInTabVisible(false)
  }

  const closeAuth = e => {
    if (e.target.id === 'auth') {
      setAuthClass('invisible')
    }
  }

  return (
    <DivGrid>
      <Home scroll={scroll} 
            showLogInModal={showLogInModal} 
            showSingUpModal={showSingUpModal} />
      <Authentication authClass={authClass} 
                      isLogInTabVisible={isLogInTabVisible}
                      showLogInModal={showLogInModal}
                      showSingUpModal={showSingUpModal}
                      closeAuth={closeAuth} />      
      <Tournament tournamentRef={tournamentRef} scroll={scroll} />
      <Team teamRef={teamRef} scroll={scroll} />
      <Video videoRef={videoRef} scroll={scroll} />
      <Contacts contactsRef={contactsRef} scroll={scroll} />
      <Faq faqRef={faqRef} scroll={scroll} />
      <AboutUs aboutUsRef={aboutUsRef} />
    </DivGrid>
  )
}
