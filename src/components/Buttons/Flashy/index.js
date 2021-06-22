/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:48:03
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import './flashy.scoped.scss';

const FlashyButton = ({
    angle,
    background: _bg,
    borderRadius: _borderRadius,
    borderWidth,
    children,
    disabled,
    gradient,
    padding,
    theme,
    transition,
    ...props
  }) => (

<div className="btn-flashy">
{children}</div>);

export default FlashyButton;
