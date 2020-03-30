import React from 'react'
import { DivContacts } from '../styles'

export default function Contacts({ contactsRef, scroll }) {
  return (
    <DivContacts ref={contactsRef}>
      <div>
        Contact us:
        <ul>
          <li>Mobile: +91999999999</li>
          <li>Address: LCO Basketball Ground, 55, Long Road near Silent Lake, New Delhi, India</li>
        </ul>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224202.56099500682!2d77.10940959078825!3d28.59482600718088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sua!4v1585225578920!5m2!1sen!2sua" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabindex="0" title="Google map"></iframe>
      <div id="contacts" onClick={scroll}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivContacts>
  )
}
