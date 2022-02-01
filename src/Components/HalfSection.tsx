import React from 'react';
import Block from './Block';
import './HalfSection.sass'

const one = require('./pics/one.png');
const two = require('./pics/two.png');
const three = require('./pics/three.png');
const four = require('./pics/four.png')

function HalfSection(props:any) {
  return (
    <section>
      <div className="mainWrap">
        <Block
          greyLine={props.greyLine}
          line={'firstLine'}
          class={props.blockNumFirst}
          heading={props.headingFirst}
          text={props.textFirst}
          src={one}/>
        <Block
          class={props.blockNumSec}
          greyLine={props.greyLine}
          line={'firstLine'}
          heading={props.headingSec}
          text={props.textSec} src={three}/>
      </div>
    </section>
  );
}

export default HalfSection;
