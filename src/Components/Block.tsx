import React from 'react';
import "./Block.sass"
function Block(props:any) {
  return (
    <div className={props.class}>
      <div className="numberWrap">
        <img src={props.src} className="number"/>
        <div className="greyLine"></div>
      </div>
      <div className='rect'></div>
      <div className="textWrap">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )

}

export default Block;


