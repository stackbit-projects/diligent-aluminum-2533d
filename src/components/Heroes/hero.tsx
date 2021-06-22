import React, { useState } from "react";
import RunningMan from '../Illustrations/RunningMan';
import GradientButton from '../Buttons/Gradient/gradientbutton'
const Hero = (props) => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="relative pb-24 lg:pb-96 bg-black">
        
            <div className>
          
                <div className="mx-auto container relative z-20 lg:px-0 px-4">
                    <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:mt-24">
                        <div className="lg:w-1/2 lg:pt-0 pt-8">
                            <h1 className="2xl:text-9xl	 xl:text-9xl text-9xl dincondensed leading-normal text-white border-l-8 lg:pl-12 pl-2 xl:mt-0 mt-8">
                                Hi.
                                <br />
                                <span className="leading-normal 2xl:text-7xl xl:text-7xl text-7xl font-bold dincondensed underline">We Need To Talk.</span>
                            </h1>
                            <p className="lg:leading-8 leading-6 text-xl text-white roboto text-light mt-6 border-l-8  lg:pl-12 pl-2 py-2">It's about your creative again... it's been... frightening.</p>
                            <div className="sm:flex items-center justify-center mt-12">
                                <a href="javascript:void(0)">
 <GradientButton
        gradient={['#8F6AFA 0%', '#375CDC 47.03%', '#0099EE 105%']}
        angle="90deg"
        padding={[10, 20]}
        borderRadius={10}
        borderWidth={3}
        color="#000000"
        fontSize={12}
      >
        test button
      </GradientButton>                              </a>
                                <a href="javascript:void(0)">
                                    <button className="w-full sm:w-auto mt-4 sm:mt-0 xl:py-5 py-2 xl:px-16 px-6  2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-indigo-700 focus:outline-none border-2 border-indigo-700 rounded-xl hover:bg-indigo-700 hover:text-white">Book A Table</button>
                                </a>
                            </div>
                            <div className="2xl:mt-24 mt-12 items-center 2xl:pl-16 xl:pl-16 lg:pl-12 md:pl-0 sm:pl-0 pl-16 md:flex hidden">

                            </div>
                            <div className="flex mt-12 items-center justify-center md:hidden">
                                <a href="javascript:void(0)" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={32} viewBox="0 0 20 32" fill="white">
                                            <path d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z" stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="cursor-pointer">
                                    <div className="w-12 h-12 bg-white mx-6 flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={28} viewBox="0 0 36 28" fill="white">
                                            <path
                                                d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                                                stroke="#0F0F0F"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a className="cursor-pointer" href="javascript:void(0)">
                                    <div className="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={38} height={38} viewBox="0 0 24 24" strokeWidth="0.75" stroke="#0F0F0F" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={4} y={4} width={16} height={16} rx={4} />
                                            <circle cx={12} cy={12} r={3} />
                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 height-main-hero xl:block hidden">
                        <RunningMan />
                        </div>
                        <div className="xl:w-1/2 xl:hidden block">
                        <RunningMan />
                        </div>
                    </div>
                </div>
                {/* Hero */}
            </div>
        </div>
    );
};
export default Hero;
