import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo, cart, menu }) => (
  <header
    style={{
      background: `#dab878`,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `0 auto`,
        padding: `.45rem 3rem`,
      }}
    >
      <Link
        to="/"
        style={{
          width: "109px",
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Img style={{maxWidth: "100%"}} fluid={logo} />
      </Link>
      <div style={{display: "flex", alignItems: "center", marginRight: "10rem"}}>
        <Link
          to="/"
          style={{
            width: "59px",
            color: `white`,
            textDecoration: `none`,
            marginRight: "50px",
          }}
        >
          <Img style={{maxWidth: "100%"}} fluid={cart} />
        </Link>
      
        <Link
          to="/"
          style={{
            width: "50px",
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Img style={{maxWidth: "100%"}} fluid={menu} />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
