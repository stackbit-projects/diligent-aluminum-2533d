import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
export default function MeditatingMan() {
  return (

    <StaticImage
      src="./meditating.svg"
      alt="I'm Thinking"
      placeholder="blurred"
      layout="fixed"
      width={400}
      loading="lazy"
      className="meditateimg animate-enter object-cover"
    />
  )
}
