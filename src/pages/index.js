/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:44:10
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react'
import Background from '../components/Backgrounds/Waves/Waves'
import Clients from '../components/Clients/composer.js'
import CTA from '../components/CTA/CaseStudySqueeze/index.js'
import Homepage from '../templates/index'
import Industries from '../components/Blocks/Industries/Industries'
import MainBanner from '../components/Blocks/Slider'
import News from '../components/common/News'
import Services from '../components/Blocks/Services/Services'
import Stats from '../components/Blocks/Stats/Stats'
import Stars from '../components/Blocks/LetUsGuess/LetUsGuess'
class Index extends Component {
  render () {
    return (
      <>
        <Homepage>
          <Background>
              <MainBanner />
                <Stars />
                <Services />
                <Stats />
                <Industries />
                <Clients />
                <News />
                <CTA />
              </Background>
        </Homepage>
      </>
    )
  }
}

export default Index
