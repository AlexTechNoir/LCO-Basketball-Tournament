import React, { useState, useEffect } from 'react'
import { DivTeam } from '../styles'
import { data } from '../data'

import TeamPlayer from './TeamPlayer'

export default function Team({ teamRef, scroll }) {
  const [ copiedData, setCopiedData ] = useState([])

  useEffect(() => {
    let tempData = []
    data.forEach(dataItem => {
      const item = {...dataItem}
      tempData = [...tempData, item] 
    })
    setCopiedData(tempData)
  }, [])

  return (
    <DivTeam ref={teamRef}>
      <h2>Team</h2>
      <div>
        {
          copiedData.map(dataItem => {
            return <TeamPlayer key={dataItem.id} dataItem={dataItem} />
          })
        }
      </div>
      <div id="team" onClick={scroll}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivTeam>
  )
}
