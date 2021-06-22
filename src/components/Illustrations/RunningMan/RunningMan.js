import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./RunningMan.scoped.scss"
export default function RunningMan() {
  return (

    <StaticImage
      src="./running.svg"
      alt="Run Away Little Girl"
      placeholder="blurred"
      layout="fullWidth"
      loading="lazy"
      className="object-cover running-1 animate-enter pb-28"
    />
  )
}
