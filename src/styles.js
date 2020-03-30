import styled from 'styled-components'
import './index.css'
import { data } from './data'

import imgHomeMobile from './img/mobileImg/homeMobile.webp'
import imgTournamentMobile from './img/mobileImg/tournamentMobile.webp'
import imgTeamMobile from './img/mobileImg/teamMobile.webp'
import imgFaqMobile from './img/mobileImg/faqMobile.webp'
import imgAboutUs from './img/aboutus.webp'
import imgHome from './img/home.webp'
import imgTournament from './img/tournament.webp'
import imgTeam from './img/team.webp'
import imgFaq from './img/faq.webp'

//App.js
export const DivGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100vh) minmax(100vh, auto) repeat(4, 100vh);
  grid-template-columns: 50% 50%;
  @media only screen and (min-width: 768px) {
    grid-template-rows: repeat(4, 100vh) repeat(2, 50vh);
  }
`

//Home.js
export const DivHome = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url(${imgHomeMobile});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    > a > img {
      width: 25vw;
      height: 25vw;
    }
    > div {
      margin: 1em 1em 0 0;
      > button {        
        background-color: rgba(255, 174, 0, 0.8);
        border-radius: 0 0 30% 30%;
        border: none;
        cursor: pointer;
        font-family: 'Timmana', sans-serif;
        &:hover {
          border-bottom: #d400ff 3px solid;
        }
      }
    }
  }
  > :nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
    > :first-child {
      font-family: 'Timmana', sans-serif;
      font-size: 10vw;
      color: rgb(255, 174, 0);
      text-align: center;
      text-shadow:
        -1px -1px 4px #d400ff,
        1px -1px 4px #d400ff,
        -1px 1px 4px #d400ff,
        1px 1px 4px #d400ff; 
    }
    > :last-child {
      border-top: #d400ff 3px solid;
      font-size: 6vw;
      color: #d400ff;
      font-family: 'Timmana', sans-serif;
      background-color: rgba(255, 174, 0, 0.8);
      text-align: center;
      border-radius: 0 0 40% 40%;
    }
    > .hidden {
      visibility: hidden;
    }
  }
  > :last-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    > :first-child {
      > a > img {
        width: 15vw;
        height: 15vw;
      }
    }
    > :nth-child(2) {
      > :first-child {
        font-size: 7vw;
      }
      > :last-child {
        font-size: 5vw;
      }
    } 
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${imgHome});
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      > a > img {
        width: 150px;
        height: 150px;
      }
    }
    > :nth-child(2) {
      > :first-child {
        font-size: 5vw;
      }
      > :last-child {
        font-size: 3vw;
      }
    } 
  }
`

//Authentication.js
export const DivAuthWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 1;
  > :first-child {
    background-color: #f8f9fa;
    margin-top: 3em;
    padding: 1.5em;
    border: solid 1px grey;
    > :first-child {
      border: solid 1px grey;
      display: flex;
      flex-direction: column;
      align-items: center;
      > :first-child {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        > button {
          width: 50%;
          cursor: pointer;
          border: none;
          padding: 0.8em 0 0.8em 0;
          &:hover {
            background-color: #e7e7e7;
          }
        }
      }
      > :last-child {
        padding: 1em;
      }
    }
  }
`

//LogIn.js
export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  > label {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 0 0.2em 0 0.2em;
  }
  > :nth-child(3) > input {
    margin-right: 0.5em;
  }
  > :last-child {
    margin-top: 0.5em;
  }
`

//SignUp.js
export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  > label {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 0 0.2em 0 0.2em;
  }
  > :last-child {
    margin-top: 0.5em;
  }
`

//ResetPassword.js
export const ResetPasswordDiv = styled.div`
  > button {
    background-color: #f8f9fa;
    margin: 0 0 1.5em 1.5em;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    &:hover {
      background-color: #e7e7e7;
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    > label {
      display: flex;
      flex-direction: column;
      > input {
        margin-top: 0.5em;
        padding: 0 0.2em 0 0.2em;
      }
    }
    > button {
      margin-top: 0.5em;
    }
  }
`

//Tournament.js
export const DivTournament = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url(${imgTournamentMobile});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    display: flex;
    font-family: 'Timmana', sans-serif;
    margin-top: 8em;
    color: rgb(255, 174, 0);
    justify-content: center;
    text-shadow:
      -1px -1px 4px #d400ff,
      1px -1px 4px #d400ff,
      -1px 1px 4px #d400ff,
      1px 1px 4px #d400ff; 
    font-size: 7vw;
  }
  > :last-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    > :first-child {
      font-size: 5vw;
    }
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${imgTournament});
    > :first-child {
      margin-top: 5em;
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      margin-top: 4em;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child {
      margin-top: 2em;
    }
  }
`

//Team.js
export const DivTeam = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  background-image: url(${imgTeamMobile});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;   
  overflow-y: auto; 
  position: relative;
  > :first-child {   
    height: 6vh;
    margin-bottom: 0;
    font-family: 'Timmana', sans-serif;
    font-size: 10vw;
    text-align: center;
    color: rgb(255, 174, 0);
    text-shadow:
      -1px -1px 4px #d400ff,
      1px -1px 4px #d400ff,
      -1px 1px 4px #d400ff,
      1px 1px 4px #d400ff; 
  }
  > :nth-child(2) {
    height: 88vh;
    display: grid;
    grid-gap: calc(var(--gutter) / 2);
    grid-template-columns: 10px repeat(${data.length}, 260px) 10px;
    grid-template-rows: 476px;
    overflow-x: auto;
    padding-bottom: calc(.75 * var(--gutter));
    margin-bottom: calc(-.5 * var(--gutter));
  }
  > :last-child {
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    z-index: 1;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    > :first-child {
      font-size: 8vw;
    }
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${imgTeam});
  }
  @media only screen and (max-width: 992px) {
    > :nth-child(2) {
      height: auto;
      &:before, :after {
        content: '';
      }
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      font-size: 6vw;
    }
    > :nth-child(2) {
      grid-template-columns: repeat(auto-fit, 260px);
      justify-content: center;	
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child {
      font-size: 4vw;
    }
  }
`

//TeamPlayer.js
export const DivTeamPlayer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-rows: auto repeat(3, auto) repeat(2, auto);
  grid-template-columns: repeat(2, 130px);
  border: black 1px solid;
  font-family: 'Timmana', sans-serif;
  background-color: rgba(45, 112, 255, 0.7);
  color: rgb(255, 255, 255);
  text-shadow:
    -1px -1px 1px #000000,
    1px -1px 1px #000000,
    -1px 1px 1px #000000,
    1px 1px 1px #000000; 
  > div {
    border: black 1px solid;
    padding: 0 .5em 0 .5em;
  } 
  > img {
    border-bottom: black 1px solid;
  } 
  > :first-child {
    grid-area: 1 / 1 / 2 / 3;
  }
  > :nth-child(2) {
    grid-area: 2 / 1 / 3 / 3;
    text-align: center;
    font-size: 1.3em;
  }
  > :nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(4) {
    grid-area: 3 / 2 / 4 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(7) {
    grid-area: 5 / 1 / 6 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(8) {
    grid-area: 6 / 1 / 7 / 2;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(9) {
    grid-area: 6 / 2 / 7 / 3;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(10) {
    grid-area: 7 / 1 / 8 / 2;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(11) {
    grid-area: 7 / 2 / 8 / 3;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
`

//Video.js
export const DivVideo = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    padding: 0 0 50% 0;
    > iframe {
      position: absolute;
      width: 100%;
      height: 92%;
    }
  }
  > :last-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8%;
    background-color: black;
    font-size: 2rem;
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background-color: white;
      > i {
        color: black;
      }
    }
  }
`

//Contacts.js
export const DivContacts = styled.div`
  grid-row: 5 / 6;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    font-family: 'Timmana', sans-serif;
    padding: .6em;
    > ul {
      margin-bottom: 0;
    }
  }
  > :nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: stretch;
    align-self: stretch;
  }
  > :last-child {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    grid-template-rows: auto 1fr;
    > :last-child {
      display: none;
    }
  }
`

//Faq.js
export const DivFaq = styled.div`
  grid-row: 6 / 7;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url(${imgFaqMobile});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  color: white; 
  overflow-y: auto;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    padding: 1em;
    font-family: 'Timmana', sans-serif;    
    > h1 {
      display: flex;
      justify-content: center;
    }
    > div {
      margin-bottom: 1em;
      > div {
        text-shadow:
          -1px -1px 1px #000000,
          1px -1px 1px #000000,
          -1px 1px 1px #000000,
          1px 1px 1px #000000; 
      }
    }
  }
  > :last-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 2;
    background-image: url(${imgFaq});
    > :last-child {
      display: none;
    }
  }
`

//AboutUs.js
export const DivAboutUs = styled.div`
  grid-row: 7 / 8;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    font-family: 'Timmana', sans-serif;
    padding: 1em;    
    > :first-child {
      text-align: center;
      text-shadow:
        -1px -1px 3px #d400ff,
        1px -1px 3px #d400ff,
        -1px 1px 3px #d400ff,
        1px 1px 3px #d400ff; 
      font-size: 10vw;
      color: rgb(255, 174, 0);
    }
    > :last-child > img {
      float: left;
      width: 100px;
      height: 100px;
    }
  }
  > :last-child {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(${imgAboutUs});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
  }
  @media only screen and (min-width: 600px) {
    > :first-child > :first-child {
      font-size: 8vw;
    }
  }
  @media only screen and (min-width: 768px) {
    grid-row: 6 / 7;
    grid-column: 2 / 3;
    > :first-child > :first-child {
      font-size: 6vw;
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child > :first-child {
      font-size: 4vw;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child > :first-child {
      font-size: 48px;
    }
  }
`