import React from 'react';
import Block from './Block';
import './MySection.sass'

const one = require('./pics/one.png');
const two = require('./pics/two.png');
const three = require('./pics/three.png');
const four = require('./pics/four.png')

function MySection() {
  return (
    <section>
      <h1 className="heading">Our History</h1>

      <div className="mainWrap">
        <Block
          class={'firstBlock'}
          heading={'April 2021'}
          text={'Creaticles is founded with a team of four co-founders to launch the first custom NFT request platform'}
          src={one}/>
        <Block heading={'August 2021'}
               class={'secondBlock'}
               text={'Creaticles testnet launches for feedback and discovery for thousands of new users'} src={two}/>
        <Block heading={'October 2021'}
               class={'thirdBlock'}
               text={'Creaticles closes their first round of investment prior to their selection as a CoinList Seed candidate'}
               src={three}/>
        <Block class={'fourthBlock'}
               heading={'TBD 2021'} text={'Official Mainnet Launch!'} src={four}/>
      </div>
    </section>
  );
}

export default MySection;
