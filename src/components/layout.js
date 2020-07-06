/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "fondo.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 109, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      cart: file(relativePath: {eq: "shopping-cart.png"}) {
        childImageSharp {
          fluid(maxWidth: 69, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu: file(relativePath: {eq: "menu-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      fb: file(relativePath: {eq: "fb.png"}) {
        childImageSharp {
          fluid(maxWidth: 44, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      insta: file(relativePath: {eq: "instagram.png"}) {
        childImageSharp {
          fluid(maxWidth: 44, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: {eq: "twitter.png"}) {
        childImageSharp {
          fluid(maxWidth: 44, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: {eq: "youtube.png"}) {
        childImageSharp {
          fluid(maxWidth: 44, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        logo={data.logo.childImageSharp.fluid} 
        cart={data.cart.childImageSharp.fluid}
        menu={data.menu.childImageSharp.fluid}
      />
      <div
        style={{
          backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer className="container pt-5 pb-5">
          <div style={{borderBottom: "2px solid #d9b777"}} className="row pb-4 align-items-center">
            <p className="col-6 m-0">¿Quieres recibir ofertas exclusivas?</p> 
            <div class="input-group col-6 m-0">
              <input style={{backgroundColor: "#253137", color: "#747b7f"}} type="text" class="form-control" placeholder="Dirección de email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button style={{backgroundColor: "#d9b777", color: "#fff"}} class="btn btn-outline-secondary" type="button" id="button-addon2">Suscribirse</button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <h3 style={{borderBottom: "1px solid #d9b777"}} className="pb-2">Contáctanos</h3>
            </div>
            <div className="col-12 col-md-4">
              <h3 style={{borderBottom: "1px solid #d9b777"}} className="pb-2">Enlaces rápidos</h3>
              <Link to="/" className="d-block text-dark">Políticas de privacidad</Link>
              <Link to="/" className="d-block text-dark">Políticas de cookies</Link>
              <Link to="/" className="d-block text-dark">Newsletter</Link>
              <Link to="/" className="d-block text-dark">Bolsa de trabajo</Link>
            </div>
            <div className="col-12 col-md-4">
              <h3 style={{borderBottom: "1px solid #d9b777"}} className="pb-2">Síguenos</h3>
              <Link to="/" style={{width: "44px"}} className="d-inline-flex">
                <Img style={{width: "100%"}} fluid={data.fb.childImageSharp.fluid} />
              </Link>
              <Link to="/" style={{width: "44px"}} className="d-inline-flex">
                <Img style={{width: "100%"}} fluid={data.insta.childImageSharp.fluid} />
              </Link>
              <Link to="/" style={{width: "44px"}} className="d-inline-flex">
                <Img style={{width: "100%"}} fluid={data.twitter.childImageSharp.fluid} />
              </Link>
              <Link to="/" style={{width: "44px"}} className="d-inline-flex">
                <Img style={{width: "100%"}} fluid={data.youtube.childImageSharp.fluid} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
