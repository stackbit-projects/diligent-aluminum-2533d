import React, { Component } from 'react';
import { Link } from "gatsby"
import "./partnerslider.scoped.scss";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 0,
    center: false,
    dots: false,
    slidetransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
    }
}

class PartnerSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div>
                <div>

                {this.state.display ? <OwlCarousel
                    className="brand-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-brand">
                            <Link href="/#">
                                <img className="partner-image grayscale" src="./images/clientlogos/freshworks.png" alt="" />
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/baskinrobbins.png" alt="" />
                                                            </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/freshworks.png" alt="" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/valpaklogo.png" alt="" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/robo-negotiator.png" alt="" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/IFA-Logo.png" alt="" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/cuemby.png" alt="" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="/#">
                                <a target="_blank">
                                <img
                        class="partner-image grayscale" src="./images/clientlogos/unliver.webp" alt="" />
                                </a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PartnerSlider;
