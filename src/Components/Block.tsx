import React from 'react';
import './Block.sass'

function Block(props: any) {
  return (
    <div className={props.class}>
      <div className={props.classNumberWrap}>
        <img src={props.src} alt="number" className="number"/>
        <div className={props.greyLine}/>
      </div>
      <div className="textWrap">
        <div className={props.textWrap}>
          <h1 className="innerHeading">{props.heading}</h1>
          <p className="text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Block;


