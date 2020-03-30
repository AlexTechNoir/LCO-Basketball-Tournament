import React from 'react'
import { DivAboutUs } from '../styles'

export default function AboutUs({ aboutUsRef }) {
  return (
    <DivAboutUs ref={aboutUsRef}>
      <div>
          <h1>About Us</h1>
          <div>
            <img src={require(`../img/logo.webp`)} alt="logo" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis culpa eligendi atque, expedita ipsa voluptas ullam deleniti labore quidem, vero nostrum molestiae numquam eaque? Id deserunt officia distinctio sapiente? Et alias exercitationem eligendi animi perspiciatis architecto, nihil provident, modi accusamus dolor ducimus porro repudiandae quas vero!
          </div>
        </div>
        <div></div>
    </DivAboutUs>
  )
}
