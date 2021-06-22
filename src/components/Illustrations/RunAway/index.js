/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 20/06/2021 - 01:32:18
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./RunAway.component.scss"
export default function RunningMan() {
  return (

    <StaticImage
      src="./RunAway.webp"
      alt="Run Away Little Girl"
      placeholder="blurred"
      layout="fullWidth"
      loading="lazy"
      className="object-cover running-1 animate-enter pb-28"
    />
  )
}
