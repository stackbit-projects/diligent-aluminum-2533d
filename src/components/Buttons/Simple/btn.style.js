/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:33:52
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import styled, {css} from 'styled-components';
import '../../../styles/globals.scss';
const ButtonStyle = styled.button`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "din-condensed", Impact, sans-serif !important;
    font-weight: 400 !important;
   font-size: 2rem;
   line-height: 3rem;

    text-decoration: underline;
    border: 0;

    margin: 40px;
    min-width: 170px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    z-index: 999;
    &:hover,
    &:focus {
        outline: none;

    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }

    ${props => props.primary && css`


        &:hover{

        }
    `}
    ${props => props.secondary && css`


        &:hover{

        }
    `}
`
ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
