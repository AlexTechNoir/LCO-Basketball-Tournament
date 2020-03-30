import React from 'react'
import { DivFaq } from '../styles'

export default function Faq({ faqRef, scroll }) {
  return (
    <DivFaq ref={faqRef}>    
      <div>
        <h1>FAQ</h1>
        <div>
          <div>
            Q: Lorem ipsum?
          </div>
          <div>
            A: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div>
          <div>
            Q: Maybe ipsum lorem?
          </div>
          <div>
            A: Esse reiciendis, sit vitae deleniti illo vel corporis adipisci similique delectus nulla quidem quis praesentium ab consequuntur?
          </div>
        </div>
        <div>
          <div>
            Q: What about lorem being ipsum?
          </div>
          <div>
            A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, mollitia!
          </div>
        </div>
        <div>
          <div>
            Q: When will lorem ipsum be dolor sit amet?
          </div>
          <div>
            A: Molestiae laudantium dolor odio laboriosam, vero necessitatibus recusandae saepe vel sapiente reiciendis minima alias minus laborum.
          </div>
        </div>
      </div>
      <div id="faq" onClick={scroll}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </DivFaq>
  )
}
