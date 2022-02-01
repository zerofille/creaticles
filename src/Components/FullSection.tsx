import React from 'react';
import HalfSection from './HalfSection';
import './FullSection.sass'

const union = require('./pics/Union (1).png')

function FullSection() {
  return (
    <section>
      <h1 className="heading">Our History</h1>
      <div className={'sectionWrap'}>
        <HalfSection headingFirst={'August 2021'}
                     headingSec={'TBD 2021'}
                     greyLine={'upperGreyLine'}
                     textFirst={'Creaticles testnet launches for feedback and discovery for thousands of new users'}
                     textSec={'Official Mainnet Launch!'} blockNumFirst={'firstBlock'}
                     blockNumSec={'thirdBlock'}/>
        <img className="union" alt="line" src={union}/>
        <HalfSection headingFirst={'April 2021'} headingSec={'October 2021'}
                     greyLine={"bottomGreyLine"}
                     textFirst={'Creaticles is founded with a team of four co-founders to launch the first custom NFT request platform'}
                     textSec={'Creaticles closes their first round of investment prior to their selection as a CoinList Seed candidate'}
                     blockNumFirst={'secondBlock'} blockNumSec={'fourthBlock'}/>
      </div>
    </section>
  );
}

export default FullSection;
