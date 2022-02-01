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
        <HalfSection
          classNumberWrap={'firstNumberWrap'}
          headingFirst={'August 2021'}
          headingSec={'TBD 2021'}
          firstsrc={one}
          secondsrc={three}
          greyLine={'upperGreyLine'}
          textFirst={'Creaticles testnet launches for feedback and discovery for thousands of new users'}
          textSec={'Official Mainnet Launch!'} blockNumFirst={'firstBlock'}
          blockNumSec={'thirdBlock'}/>
        <img className="union" alt="line" src={union}/>
        <HalfSection
          classNumberWrap={'secNumberWrap'}
          firstsrc={two}
          secondsrc={four}
          headingFirst={'April 2021'} headingSec={'October 2021'}
          greyLine={'bottomGreyLine'}
          textFirst={'Creaticles is founded with a team of four co-founders to launch the first custom NFT request platform'}
          textSec={'Creaticles closes their first round of investment prior to their selection as a CoinList Seed candidate'}
          blockNumFirst={'secondBlock'} blockNumSec={'fourthBlock'}/>
      </div>
    </section>
  );
}

export default FullSection;
