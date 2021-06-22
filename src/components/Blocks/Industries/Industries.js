/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:36:24
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import {Link} from 'gatsby';
import "./Industries.comp.scss";
import SectionTitle from '../../Titles/SectionTitle';
import Button from "../../Buttons/Simple/index";
import Flashy from "../../Buttons/Flashy/index";
class Industries extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="industries-area pb-100 ">

			    <div className="container px-20 py-20 ">
                   <SectionTitle subheading="Where We Specialize"
                   title="Industries We Serve"
                   body="We consider ourselves to be 'industry-agnostic,' but we specialize in B2B (though we have had MANY B2C clients).  We have a penchant for technical sales, insurance, franchisor branding, distributors, SaaS, medical, and manufacturing.  But, only because we’ve had clusters of clients in each of those areas.  As long as the nature of the challenge is branding, marketing, sales, or business, we’re specialized there.  This requires a lot more work on our part, but we know your industry like our own by the end of our process."
/>










                    <div className="tab industries-list-tab">


                    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

<div class="my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">





                                {/* Tabs navs */}
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <span>
                                            <i className="flaticon-machine-learning"></i>
                                            <h3 className="text-2xl text-white underline dincondensed bold">Heavy Industry</h3>
                                            <p className="text-white text-md grotesk">All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <span>
                                            <i className="flaticon-artificial-intelligence"></i>
                                            <h3 className="text-2xl text-white underline dincondensed bold">Transportation</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <span>
                                            <i className="flaticon-health"></i>
                                            <h3 className="text-2xl text-white underline dincondensed bold">Health Care</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <span>
                                            <i className="flaticon-automation"></i>
                                            <h3 className="text-2xl text-white underline dincondensed bold">Manufacturing</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div class="my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
                                <div className="tab_content">
                                    {/* Tab item #1 */}
                                    <div id="tab1" className="tabs_item">
                                                <div className="industries-img">
                                                    <img src="/images/offer1.png" alt="Image" />
                                                </div>

                                                <div className="industries-content">
                                                    <h3>Heavy Industry</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt?</p>



<Flashy>Text</Flashy>

                                                        <Link href="/index-5/#">
<Button styleName="gradientbutton" className="px-20 text-4xl rounded shadow py-50 button gradientbutton border-rounded">test</Button>                                                        </Link>
                                                    </div>
                                                </div>
                                    </div>

                                    {/* Tab item #2 */}
                                    <div id="tab2" className="tabs_item">
                                                <div className="industries-content">
                                                    <h3 className="text-lg text-white grotesk">Transportation</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>


                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="industries-img right-img">
                                                    <img src="/images/offer2.png" alt="Image" />
                                                </div>
                                    </div>

                                    {/* Tab item #3 */}
                                    <div id="tab3" className="tabs_item">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer3.png" alt="Image" />
                                                </div>

                                                <div className="industries-content">
                                                    <h3>Health Care</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>



                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>





                                    </div>

                      {/* Tab item 3 end */}


                      {/* Tab item #4 */}
                                    {/* Tab item #4 */}
                                    <div id="tab4" className="tabs_item">
                                                <div className="industries-content">
                                                    <h3>Manufacturing</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>


                                                                                                                 </div>


</div>

                                    {/* Tab item #4 */}

</div> {/* tab content closer */}
</div>                                    {/* column closer */}

</div>
                                    {/* opened */}



                                    {/* closed */}













                                    </div>
            </section>
        );
    }
}

export default Industries;
