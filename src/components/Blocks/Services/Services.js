/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:36:56
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import "./Services.scoped.css";
import SectionTitle from "../../Titles/SectionTitle";

const subtitle="<div>What Makes Us The <span className='text-2xl text-center text-gradient grotesk text-bold'>Best</span></div>";

class ProblemsWeSolve extends Component {
    render() {
        return (

            <section className="problems-we-solve-area ptb-100">

                <div className="container">


<SectionTitle subtitle="What is it like" title='Problems We Solve' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi rem quo itaque minus dolorem ratione vero, quisquam reiciendis quia atque eos aspernatur.'/>





<div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">





<div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
<div className="problems-we-solve-content ">

<ul>
    <li className="rounded glass">
        <span>01 <i className="flaticon-technical-support"></i></span>
        <h3>Safe Security</h3>
        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </li>
    <li className="rounded ml glass">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Technical Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="rounded ml-25 glass">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Live Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    </ul>

</div>
</div>
  <div class="my-1 px-2 w-full overflow-hidden sm:my-1 sm:px-2 md:my-1 md:px-2 md:w-1/2 lg:my-1 lg:px-2 lg:w-1/2 xl:my-1 xl:px-2 xl:w-1/2">

  <div className="problems-we-solve-content">
                                <ul>


                                    <li className="rounded glass">
                                        <span>04 <i className="flaticon-technical-support"></i></span>
                                        <h3>Free Try </h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>




  <li className="rounded ml glass">
                                        <span>05 <i className="flaticon-shield"></i></span>
                                        <h3>Advanced Tchnology</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>



  <li className="rounded ml-25 glass">
                                        <span>06 <i className="flaticon-support"></i></span>
                                        <h3>Competitive Pricing</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>




  </ul>
</div>



  </div>




</div>
           </div>
            </section>
        )
    }
}

export default ProblemsWeSolve;
