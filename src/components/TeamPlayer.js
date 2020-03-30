import React from 'react'
import { DivTeamPlayer } from '../styles'

export default function TeamPlayer({ dataItem }) {
  const {
    id,
    name,
    weight,
    height,
    age,
    born,
    exp,
    pts,
    reb,
    ast,
    pie
  } = dataItem;

  return (
    <DivTeamPlayer>
      <img alt="player" src={require(`../img/team/${id}.webp`)} />
      <div>{name}</div>
      <div>
        <div>WT</div>
        <div>{weight}</div>
      </div>
      <div>
        <div>HT</div>
        <div>{height}</div>
      </div>
      <div>
        <div>AGE</div>
        <div>{age}</div>
      </div>
      <div>
        <div>BORN</div>
        <div>{born}</div>
      </div>
      <div>
        <div>EXP</div>
        <div>{exp}</div>
      </div>
      <div>
        <div>PTS</div>
        <div>{pts}</div>
      </div>
      <div>
        <div>REB</div>
        <div>{reb}</div>
      </div>
      <div>
        <div>AST</div>
        <div>{ast}</div>
      </div>
      <div>
        <div>PIE</div>
        <div>{pie}</div>
      </div>
    </DivTeamPlayer>
  )
}
