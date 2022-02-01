import React from 'react';
import './NumberBlock.sass'



function NumberBlock(props: any) {
  return (

    <div className={props.styles}>
      <img src={props.src} alt="number" className="number"/>
      <div className={props.lineStyles}/>

    </div>

  )
}

export default NumberBlock;


