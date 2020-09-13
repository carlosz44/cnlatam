import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
