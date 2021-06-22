/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 17:08:42
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 17:08:32
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function CTA() {
  return (
    <div className="relative bg-gradient">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
      </div>
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold tracking-wider text-white uppercase grotesk">Award winning support</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white underline sm:text-4xl dincondensed">We’re here to help</p>
          <p className="mt-3 text-white text-md roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
              >
                Visit the help center
                <ExternalLinkIcon className="w-5 h-5 ml-3 -mr-1 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
