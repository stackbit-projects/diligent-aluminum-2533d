/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:37:13
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component, useState } from 'react';
import { Link } from 'gatsby';
import RunningMan from '../../Illustrations/RunningMan/RunningMan';
import './Slider.scoped.css';
import { render } from 'react-dom';
/*const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
  // autoHeight: true,
  autoplay: true,
  smartSpeed: 500,
  autoplayHoverPause: true,
  animateOut: 'slideOutDown',
  animateIn: 'slideInDown',
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
}
*/
class MainBanner extends Component {
  /*state = {
    display: false,
    panel: true,
  }

  componentDidMount() {
    this.setState({ display: true })
  }*/

  render() {
    return (
      <>
        <div className="h-screen">
          <section className="slider-area">
          <div className="container pt-6 mx-auto">
                    <div className="w-full pb-6 md:w-1/4 md:pb-0 md:pr-6">
                    <h1 className="text-white underline 2xl:text-9xl xl:text-9xl text-9xl dincondensed">
                                                Hi.
                                            </h1>
                                            <h2 className="font-bold dincondensed white-text font-size-3xl ">
                                                We <span className="underline">Need</span> To Talk.
                                            </h2>
                                            <p className="no-underline grotesk white-text font-size-xl">
                                                It's about your brand and creative again.
                                                It's been... frightening.
                                            </p>
                    </div>
                    <div className="w-full md:w-3/4">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <RunningMan />
                    </div>
                </div>
        </section>
        </div>
        </>
            )}};
            export default MainBanner;


/*}
            {this.state.display ? (
              <OwlCarousel
                className="oakwave-slider owl-carousel owl-theme"
                {...options}
              >
                <div className="oakwave-slider-item">

                        <div className="container pt-6 mx-auto">
                            <div className="overflow-hidden oakwave-slider-text one ">
                                <div class="section group ">
                                    <div class="overflow-hidden align-middle 	">
                                        <div className="w-full pb-6 md:w-1/4 md:pb-0 md:pr-6">
                                            <h1 className="pl-2 mt-8 leading-normal text-white border-l-8 2xl:text-9xl xl:text-9xl text-9xl dincondensed lg:pl-12 xl:mt-0">
                                                Hi.
                                            </h1>
                                            <h2 className="font-bold underline dincondensed white-text font-size-3xl ">
                                                We Need To Talk.
                                            </h2>
                                            <p className="grotesk white-text font-size-xl">
                                                It's about your brand and creative again.
                                                It's been... frightening.
                                            </p>
                                        </div>
                                        <div className="w-full md:w-3/4">
                                            <RunningMan />
                                        </div>
                                    </div>

        <div className="oakwave-slider-item item-bg2">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="overflow-hidden oakwave-slider-text two">
                          <span>IT & AI Services</span>
                          <h1>Specialized Artificial Intelligence Startup</h1>
                          <p>
                            If we drive down the cost of transportation in
                            space, we can do great things.
                          </p>

                          <div className="slider-btn">
                            <Link href="/services">
                              <a className="default-btn active">Our Services</a>
                            </Link>

                            <Link href="/contact">
                              <a className="default-btn white">Contact Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="oakwave-slider-item item-bg3">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="overflow-hidden oakwave-slider-text three">
                          <span>IT & AI Services</span>
                          <h1>World’s Leading Machine Learning Company</h1>
                          <p>
                            If we drive down the cost of transportation in
                            space, we can do great things.
                          </p>

                            <div className="slider-btn">
                                <Link href="/services">
                                    <a className="default-btn active">Our Services</a>
                                </Link>

                                <Link href="/contact">
                                    <a className="default-btn white">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </section>
        </div>
      </>
    )
  }
}*/
