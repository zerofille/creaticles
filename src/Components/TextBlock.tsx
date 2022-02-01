import React from 'react';
import './TextBlock.sass'

function TextBlock(props: any) {
  return (
    <div className="textBlockWrap">
      <div className={'innerTextWrap'}>
      <h3 className={props.headerStyle}>{props.header}</h3>
      <p className={props.textWrapStyle}>{props.text}</p></div>
    </div>
  );
}

export default TextBlock;
