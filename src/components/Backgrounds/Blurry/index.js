/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 15:43:21
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import './blurry.scoped.scss'

const Blurry = ({ children }) => (
  <div
    style={{
      position: 'relative',

      width: '100%',
      height: '100%'
    }}
  >
    <div className='particlesbackground'>    {children}

      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />

    </div>
  </div>

)

export default Blurry
