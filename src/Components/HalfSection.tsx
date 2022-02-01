import React from 'react';
import NumberBlock from './NumberBlock';
import './HalfSection.sass'
import TextBlock from './TextBlock';

function HalfSection(props: any) {
  return (
    <section className={props.className}>
      <NumberBlock src={props.src} lineStyles={props.stylesForLine} styles={props.numberSt}/>
      <TextBlock   header={props.header} text={props.text}/>
      <NumberBlock src={props.src2} lineStyles={props.stylesForLine} styles={props.numberSt}/>
      <TextBlock headerStyle={props.headerStyle} textWrapStyle={props.textWrapStyle} header={props.header2} text={props.text2}/>
    </section>
  );
}

export default HalfSection;
