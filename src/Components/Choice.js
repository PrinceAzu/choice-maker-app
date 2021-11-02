import React from 'react'

const Choice = (props) => {
    
  return (
    <div className="choice">
      <p className="choice__text" id={props.index}>
        {props.index+1}. {props.choice}
      </p>
      <button className="btn btn-link" onClick={(e) => {props.removeSelected(e, props.index)}} >Remove</button>
    </div>
  )
}

export default Choice;