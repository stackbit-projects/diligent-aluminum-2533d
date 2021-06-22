/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:48:33
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, fontSize, borderRadius } from 'styled-system';
import { prop, ifProp } from 'styled-tools';

import { getLinearGradient, getPadding } from './processor.js';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  padding: ${props => props.borderWidth}px;
  outline: 0;
  background-image: linear-gradient(
    ${ifProp(
      ({ angle }) => angle.includes('deg'),
      prop('angle'),
      props => `to ${prop('angle')(props)}`
    )},
    ${props => getLinearGradient(props.theme, props.gradient)}
  );
  cursor: pointer;
  &:hover {
    animation: rubberBand 2s linear;

  }

  ${ifProp(
    'disabled',
    css`
      cursor: not-allowed;
      opacity: 0.65;
    `
  )};

  ${borderRadius};
  ${color};
  ${fontSize};

  text-decoration: none;
`;

GradientBackground.propTypes = {
  angle: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  gradient: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string.isRequired,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
};

GradientBackground.defaultProps = {
  color: '#000000',
  fontSize: 16,
};

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: ${props => getPadding(props.padding)};
  outline: 0;

  ${ifProp(
    { disabled: false },
    css`

        animation: rubberBand 2s linear;
      transition: ${prop('transition.property')} ${prop('transition.duration')}s
        ${prop('transition.timingFunction')} ${prop('transition.delay')}s;

      &:hover {
        background: transparent;
        color: #fff;
        animation: rubberBand 2s linear;

      }
    `
  )};

  ${borderRadius};
  ${color};
`;

Inner.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  transition: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  ...borderRadius.propTypes,
};

const RubberButton = ({
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
  <GradientBackground
    borderRadius={_borderRadius}
    borderWidth={borderWidth}
    angle={angle}
    disabled={disabled}
    gradient={gradient}
    theme={theme}
    {...props}
  >
    <Inner
      bg={_bg}
      borderRadius={_borderRadius - (borderWidth + 1)}
      disabled={disabled}
      padding={padding}
      transition={transition}
    >
      {children}
    </Inner>
  </GradientBackground>
);

RubberButton.propTypes = {
  angle: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  disabled: PropTypes.bool,
  gradient: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  theme: PropTypes.string,
  transition: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  ...color.propTypes,
  ...fontSize.propTypes,
};

RubberButton.defaultProps = {
  angle: 'right',
  backgroundColor: '#2b2b2b',
  borderRadius: 20,
  borderWidth: 2,
  disabled: false,
  gradient: null,
  padding: 10,
  theme: 'Main',
  transition: {
    property: 'all',
    duration: 0.2,
    timingFunction: 'ease-in-out',
    delay: 0,
  },
};

export default RubberButton;
