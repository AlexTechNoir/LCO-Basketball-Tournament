import React from 'react'
import { DivTournament } from '../styles'

export default function Tournament({ tournamentRef, scroll }) {
  return (
    <DivTournament ref={tournamentRef}>
      <div>
        Big tournament is coming soon!
      </div>
      <div id="tournament" onClick={scroll}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivTournament>
  )
}
