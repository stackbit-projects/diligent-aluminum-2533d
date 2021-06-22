import React, { Component, useState } from 'react';
import RunningMan from '../../Illustrations/RunningMan/RunningMan';

const Index = (props) => {
    const [menu, setMenu] = useState(false);
    return (
               <div className>
                {/* Navigation */}
                {/* Desktop */}

                {/* Desktop */}
                {/* Mobile */}

                {/* Mobile */}
                {/* Navigation */}
                {/* Hero */}
                <div className="container relative z-20 px-4 mx-auto lg:px-0">
                    <div className="flex flex-col-reverse items-center justify-between h-screen lg:flex-row lg:mt-24">
                        <div className="pt-8 lg:w-1/2 lg:pt-0">
                                            <h1 className="text-white underline 2xl:text-9xl xl:text-9xl text-9xl dincondensed">
                                                Hi.
                                            </h1>
                                            <h2 className="text-6xl font-bold dincondensed white-text ">
                                                We Need To Talk.
                                            </h2>
                                            <p className="grotesk white-text font-size-xl">
                                                It's about your brand and creative again.
                                                It's been... frightening.
                                            </p>

                        </div>

                        <div className="hidden lg:w-1/2 height-main-hero xl:block">
                        <RunningMan />
                        </div>
                        <div className="block xl:w-1/2 xl:hidden">
                        <RunningMan />
                        </div>
                        </div>
                {/* Hero */}
            </div>
        </div>
    );
};
export default Index;
