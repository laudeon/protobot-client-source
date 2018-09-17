import React from 'react'

export default function List (props) {
  if (props.elements.size === 0) {
    return null
  }
  return (
    <ul className={props.listClassName}>
      {[...props.elements.values()].map(elem => (
        <div key={elem.id} className={'list-element ' + (elem.user === 'chatbot' ? 'chatbot' : 'user')}>
          <span className='before-element-content'>{props.beforeElem(elem)}</span>
          <div>
            {elem.text}
          </div>
          {/* {props.afterElem(elem)} */}
        </div>
      ))}
    </ul>
  )
}
