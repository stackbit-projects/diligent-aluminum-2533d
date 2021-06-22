import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import PartnerSlider from '../Slider';
import SectionTitle from "../../Titles/SectionTitle";
import "./testimonials.scoped.scss";
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}





class Testimonials extends Component {

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
<>
<div className="testimonials-area">
  <SectionTitle title="Who We Work With" subtitle="The Greatest Folks Ever" body="This is who we work with." />
                    {this.state.display ? <OwlCarousel
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>In an insanely short time, you conceptualized and delivered upon an idea 100x better than we had brought to the table. You even saw opportunity we had entirely overlooked.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Scott Z., CEO</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and business-to-government fulfillment group</div>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>For eight years, we haven't been able to boil down our offering and make it palatable. In a highly complex industry and business, you did just that.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Dr. Sandy F., SVP</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and B2G biotechnolgy and research institute</div>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Your strategy put meat and merit on the bone! I am so pumped full of ideas.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Dr. Jay Stevens</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and B2C medical provider franchisor</div>
                            </div>
                        </div>

                       </OwlCarousel> : ''}
                       </div>    </>
        );
    }
}

export default Testimonials;
