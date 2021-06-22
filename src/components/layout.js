
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

{/*import FavIcon from "assets/images/favicon.png"*/}

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{`Appion is Next Gen Nextjs and Gatsby landing`}</title>
        <link rel="shortcut icon" type="image/x-icon" href={/*{FavIcon}*/} />
        <link rel="stylesheet" href="https://use.typekit.net/aek5xfr.css" />
      </Helmet>
      
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
