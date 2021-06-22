import React, { Component } from 'react';
import { Link } from "gatsby";
import "./Services.scoped.scss";
import services from "./data.js";
import SectionTitle from "../../Titles/SectionTitle";
import Floaters from "../../Parallax/floaters";
import { FaBullhorn } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

class Services extends Component {
    render() {
        return (
            <section className="offer-area pt-100 pb-70">



<div className="container">
<SectionTitle title="Services" subtitle="What We Offer" body="While most of our clients utilize us, at first, for a strategy and then for CMO-on-demand or creative problem-solving services, we are fairly flexible in the way we setup relationships. Basically, if there is a mutual spark, we'll find a way to make it work.

" />

  <div className="row">
    <div className="col">
    <div className="rounded single-offer bg-black-gradient">

    <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a className="text-white dincondensed hover:text-indigo-500">Brand Strategy</a>
                                    </Link>
                                </h3>
                                <p>Know how parents always say, "There should be a manual on parenting"... Kind of like that.
</p>

    </div></div>
    <div className="col"><div className="rounded single-offer bg-black-gradient">

    <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a className="text-white dincondensed hover:text-indigo-500">Brand Development</a>
                                    </Link>
                                </h3>
                                <p>Your brand is your foundation and a weak foundation makes for a shaky house.
</p>
  </div></div>
  <div className="col"><div className="rounded single-offer bg-black-gradient">

                               <i className="flaticon-chip"></i>
                                                           <h3>
                                                               <Link href="/service-details">
                                                                   <a className="text-white dincondensed hover:text-indigo-500">Site & Tech Infrastructure
</a>
                                                               </Link>
                                                           </h3>
                                                           <p>The base of your growth efforts and epicenter of your business effectiveness.
</p>
                             </div></div>
  </div>
  <div className="row">
  <div className="col"><div className="rounded single-offer bg-black-gradient">

                               <i className="flaticon-chip"></i>
                                                           <h3>
                                                               <Link href="/service-details">
                                                                   <a className="text-white dincondensed hover:text-indigo-500">Content</a>
                                                               </Link>
                                                           </h3>
                                                           <p>Your content needs to grab the attention of your target market and hold it.
</p>
                             </div></div>
                             <div className="col"><div className="rounded single-offer bg-black-gradient">

                               <i className="flaticon-chip"></i>
                                                           <h3>
                                                               <Link href="/service-details">
                                                                   <a className="text-white dincondensed hover:text-indigo-500">Creative Infusion</a>
                                                               </Link>
                                                           </h3>
                                                           <p>The power that an outside perspective brings to the table can reignite the struggling creative juices of your talented team.</p>
                             </div></div>
                             <div className="col"><div className="rounded single-offer bg-black-gradient">

                               <i className="flaticon-chip"></i>
                                                           <h3>
                                                               <Link href="/service-details">
                                                                   <a className="text-white dincondensed hover:text-indigo-500">Marketing & Growth Strategy</a>
                                                               </Link>
                                                           </h3>
                                                           <p>Go ahead, try to find a better marketing, sales, or growth strategy, it's right next to the Fountain of Youth and anything marketed as "free" that's actually free.</p>
                             </div></div>
</div>


</div>

            </section>
        );
    }
}

export default Services;
