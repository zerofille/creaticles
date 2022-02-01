import React from 'react';
import './Block.sass'

function Block(props: any) {
  return (
    <div className={props.class}>
      <div className="numberWrap">
        <img src={props.src} alt="number" className="number"/>
        <div className={props.greyLine}/>
      </div>
      <div className="textWrap">
        <div className="innerTextWrap">
          <h1 className="innerHeading">{props.heading}</h1>
          <p className="text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Block;


