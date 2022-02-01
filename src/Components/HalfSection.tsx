import React from 'react';
import Block from './Block';
import './HalfSection.sass'


function HalfSection(props: any) {
  return (
    <section>
      <div className="mainWrap">
        <Block
          classNumberWrap={props.classNumberWrap}
          greyLine={props.greyLine}
          line={'firstLine'}
          class={props.blockNumFirst}
          heading={props.headingFirst}
          text={props.textFirst}
          textWrap={props.textWrapFirst}
          src={props.firstsrc}/>
        <Block
          src={props.secondsrc}
          textWrap={props.textWrapSec}
          classNumberWrap={props.classNumberWrap}
          class={props.blockNumSec}
          greyLine={props.greyLine}
          line={'firstLine'}
          innertextWrap={props.textWrap}
          heading={props.headingSec}
          text={props.textSec}/>
      </div>
    </section>
  );
}

export default HalfSection;
