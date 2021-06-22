/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 20/06/2021 - 00:41:08
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          :
    * - Modification    :
**/
import React from "react";
import { Presentation, Slide } from './impress';
import "./styles/impress-demo.css";
import "./styles/impress-common.css";

import MainBanner from '../Blocks/Slider'
import News from '../common/News'
import Services from '../Blocks/Services/Services'
// style of react-impressjs
import RunAway from "../Illustrations/RunAway";
class Prezo extends React.Component {
    render () {
      return (
          <>
          <section className="w-full h-screen">
        <Presentation className="w-full h-screen" id="impress" data-transition-duration="1000" data-autoplay="7">

        <div className="fallback-message">
          <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>
          <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
        </div>

        <Slide id="impress" data-transition-duration={2000} data-x={0} data-y={0} data-z={350}>
            <p>Slide one</p>
          </Slide>
          <Slide className="step" data-x={350} data-y={0} data-z={0} data-rotate-y={90}>
            <p>Slide two</p>
          </Slide>
          <Slide className="step" data-x={0} data-y={350} data-z={0} data-rotate-x={-90} data-rotate-z={90}>
            <p>Slide three</p>
          </Slide>
          <Slide className="step" data-x={0} data-y={-350} data-z={0} data-rotate-x={90} data-rotate-z={-90}>
            <p>Slide four</p>
          </Slide>
          <Slide className="step" data-x={-350} data-y={0} data-z={0} data-rotate-y={-90} data-rotate-z={-180}>
            <p>Slide five</p>
          </Slide>
          <Slide className="step" data-x={0} data-y={0} data-z={-350} data-rotate-y={-180} data-rotate-z={-180}>
            <p>Slide six</p>
          </Slide>
          <Slide id="overview" className="step" data-x={700} data-y={-100} data-z={1000} data-scale={1} style={{pointerEvents: 'none'}}>
          </Slide>
        <div id="impress-toolbar" />
        <div id="impress-help" />

</Presentation>
      </section>
      </>
    );
  }
};

export default Prezo;


