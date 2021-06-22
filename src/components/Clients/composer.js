import React, { Component } from 'react';
import "./Testimonials";
import PartnerSlider from "./Slider";
import Testimonials from "./Testimonials";
import Particle from '../Backgrounds/Blurry';

class Clients extends Component {
    render() {
        return (            <>
<Particle>
            <section className="px-10 rounded client-area ptb-100">
<div className="container">


<Testimonials />

<div className="my-10"></div>

        <PartnerSlider />
 </div>
</section>   </Particle>
   </>
        );
    }
}

export default Clients;
