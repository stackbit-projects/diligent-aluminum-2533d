/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import './letusguess.scss'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import features from '../../ContentBlocks/data.js'
import MeditatingMan from '../../Illustrations/Meditating'


export default function LetUsGuess() {
  return (
    <div className="relative">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2">
        <div className="px-4 py-16 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
             <h2 className="text-4xl font-bold tracking-wide underline dincondensed 2xl:text-8xl xl:text-7xl">Let Us Guess</h2>
          <MeditatingMan />
            <dl className="mt-12 space-y-10">

            </dl>
          </div>
        </div>
        <div className="px-4 py-16 sm:py-24 sm:px-6 lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
            {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 rounded-md">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd><span className="ml-16 text-lg font-medium leading-6 text-white roboto">{feature.name}</span><br /><span className="mt-2 ml-16 font-light text-white grotesk">{feature.description}</span></dd>
                </div>
              ))}


          </div>
        </div>
      </div>
    </div>
  )
}

