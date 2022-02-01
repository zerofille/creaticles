import React from 'react';
import HalfSection from './HalfSection';
import './FullSection.sass'

const one = require('./pics/one.png');
const two = require('./pics/two.png');
const three = require('./pics/three.png');
const four = require('./pics/four.png')
const union = require('./pics/Union (1).png')

function FullSection() {
  return (
    <section>
      <h1 className="heading">Our <span className={'span'}>History</span></h1>
      <div className={'sectionWrap'}>
        <HalfSection header={'August 2021'} header2={'TBD 2021'}
                     headerStyle={'headerStyle'}
                     textWrapStyle={'textWrapStyle'}
                     text={'Creaticles testnet launches for feedback and discovery for thousands of new users'}
                     text2={'Official Mainnet Launch!'}
                     src={one} src2={three} stylesForLine={'nonRevLine'}
                     numberSt={'nonReverse'} className={'row'}/>
        <img className="union" alt="line" src={union}/>
        <HalfSection

          header={'October 2021'} header2={'April 2021'}
          text={'Creaticles closes their first round of investment prior to their selection as a CoinList Seed candidate'}
          text2={'Creaticles is founded with a team of four co-founders to launch the first custom NFT request platform'}
          src={four} src2={two} stylesForLine={'revLine'} numberSt={'reverse'} className={'rowReverse'}/>
      </div>
    </section>
  );
}

export default FullSection;
