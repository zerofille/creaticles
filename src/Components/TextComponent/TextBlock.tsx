import React from 'react';
import './TextBlock.sass'


function TextBlock(props: any) {


  return (

    <div className={props.class}>

      <h3 className={props.textAlign}>{props.header}</h3>
      <p className={props.textAlign}>{props.text}</p>

    </div>
  );
}

export default TextBlock;
