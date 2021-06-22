/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:37:40
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import { Link } from "gatsby"
import "./Stats.scoped.css";
import GlassyButton from "../../Buttons/Glass";
class Stats extends Component {
    render() {
        return (

            <section className="px-10 business-area ptb-100 gradientbgdiv">
                <div className="container">
                <div className="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-4 xl:-mx-4">
                        <div className="w-full overflow-hidden col-lg-6 md:my-1 md:px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">

                            <div className="business-content">
                                <h2 className="text-4xl underline dincondensed bold">By The Numbers</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3 className="text-sm grotesk bold">AI Will Automate Cybersecurity Improve</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3 className="text-sm grotesk bold">A Community With A Unique Mission</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                           <GlassyButton texty="hello" />     





                        </div>



<div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
                        <div className="flex flex-wrap -mx-1 overflow-visible sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-4">
                                <div className="w-1/2 px-1 my-1 overflow-visible sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 counter-nth">
                                    <div className="border border-solid rounded single-counter bg-glass border-blue hover:border-white hover:text-white text-blue">
                                        <h2><span className="text-4xl underline target dincondensed bold">318</span></h2>
                                        <p className="font-light leading-4 text-md target roboto">Brands Reborn</p>
                                         </div>
</div>
                                <div className="w-1/2 px-1 my-1 overflow-visible sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 counter-nth">
                                    <div className="border border-solid rounded single-counter bg-glass border-purple text-purple hover:border-white hover:text-white ">
                                        <h2><span className="text-4xl underline target dincondensed bold">247</span></h2>
                                        <p className="font-light leading-4 text-md target roboto">Strategies Delivered</p>
                                    </div>
                                </div>

                                <div className="w-1/2 px-1 my-1 overflow-visible sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 counter-nth">
                                    <div className="border border-solid rounded border-indigo text-indigo hover:border-white hover:text-white single-counter bg-glass">
                                        <h2><span className="text-4xl underline target dincondensed bold">0</span></h2>
                                        <p className="font-light leading-4 text-md target roboto">Fucks Given</p>
                                    </div>
                                </div>

                                <div className="w-1/2 px-1 my-1 overflow-visible sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 counter-nth">
                                    <div className="border border-solid rounded border-gray text-gray hover:border-white hover:text-white single-counter bg-glass">
                                        <h2><span className="text-4xl underline target dincondensed bold">80</span></h2>
                                        <p className="font-light leading-4 text-md target roboto">Award Win</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div></div>
            </section>
        );
    }
}

export default Stats;
