import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from './btn.style';
import "./button.scss";


const Button = ({
    className,
    children,
  ...props

}) => {
  const addClasses = [''];
  if (className) {
    addClasses.push(className);
  }



  return (
    <ButtonStyle
      className={addClasses.join(" ")}
      {...props}
    >
    {children}
    </ButtonStyle>
  )
};

Button.propTypes = {
    as: PropTypes.oneOf(["button", "a",]), //--
    upperCase: PropTypes.bool, //--
    styleName: PropTypes.oneOf(["purple", "blue", "lightblue", "gradient", "black", "darkknightrises"]), //--

  };

export default Button;
