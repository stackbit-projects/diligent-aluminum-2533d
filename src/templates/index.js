/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 22/06/2021 - 01:41:24
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

import { MetaData } from '../components/Meta'
import Layout from "../components/Structure/layout.js";


const HomePage = ({ children }) => {
    return (
        <>

            <Helmet>
            </Helmet>
            <Layout>
                          {children}
            </Layout>
            </> )
};

export default HomePage;
