import React from 'react';
import TextBlock from './TextComponent/TextBlock';
import NumberBlock from './NumberComponent/NumberBlock';
import './MySections.sass'

const one = require('./pics/one.png')
const two = require('./pics/two.png')
const three = require('./pics/three.png')
const four = require('./pics/four.png')

function MySection(props: any) {


  return (<div className="sectionWrapper">
      {/*<div className='gradientLine'></div>*/}
      <div className={'mainWrap'}>
        <div className='gradientLine'></div>
        <div className={'blockWrap'}><NumberBlock class="numberWrap1" src={one}/></div>

        <div className={'blockWrap'}><TextBlock class="textBlockWrap1" header={'August 2021'}
                                                text={'Creaticles testnet launches for feedback and discovery for thousands of new users'}/>
        </div>

        <div className={'blockWrap'}><NumberBlock class="numberWrap1" src={three}/></div>

        <div className={'blockWrap'}><TextBlock class="textBlockWrap1" header={'TBD 2021'} text={'Official Mainnet Launch!'}/></div>

        <div className={'blockWrap'}><TextBlock class="textBlockWrap2" header={'April 2021'}
                                                text={'Creaticles is founded with a team of four co-founders to launch the first custom NFT request platform'}/>
        </div>

        <div className={'blockWrap'}><NumberBlock class="numberWrap2" src={two}/></div>

        <div className={'blockWrap'}><TextBlock class="textBlockWrap2" header={'October 2021'}
                                                text={'Creaticles closes their first round of investment prior to their selection as a CoinList Seed candidate'}/>
        </div>

        <div className={'blockWrap'}><NumberBlock class="numberWrap2" src={four}/></div>

      </div>
    </div>
  )
}

export default MySection;
