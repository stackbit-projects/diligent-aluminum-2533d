/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 22/06/2021 - 01:48:37
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/Meta'
import Structure from '../components/Structure/layout.js';


/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const General = ({ children }) => {
    return (
        <>

            <Structure>

                          {children}
            </Structure>
            </> )
};

export default General;
