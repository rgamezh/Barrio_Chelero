import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${data.mapBackground.childImageSharp.fluid.src})`,
        backgroundSize: "cover",
        backgroundPositionY: "-100px"
      }}
    >
      <Img style={{width: '1000px'}} fluid={data.map.childImageSharp.fluid} />
    </div>
    <div style={{backgroundColor: "rgba(231,225,211, 0.5)"}}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div style={{borderRight: "1px solid #d9b777"}} className="col-12 col-md-3 d-flex">
            <div style={{width: "120px", marginRight: "10px"}}>
              <Img fluid={data.botella.childImageSharp.fluid} />
            </div>
            <div>
              <h4 className="mb-0 advantages">SELECCIÓN ÚNICA</h4>
              <p className="advantages" style={{fontSize: ".8rem"}}>
                Descubre productos nuevos y 
                exclusivos. ¡Tenemos más de 100 cervezas!
              </p>
            </div>
          </div>
          <div style={{borderRight: "1px solid #d9b777"}} className="col-12 col-md-3 d-flex">
            <div style={{width: "120px", marginRight: "10px"}}>
              <Img fluid={data.barrio.childImageSharp.fluid} />
            </div>
            <div>
              <h4 className="mb-0 advantages">CLUB CHELERO</h4>
              <p className="advantages" style={{fontSize: ".8rem"}}>
                Envío a patir de 24 cervezas por caja.
              </p>
            </div>
          </div>
          <div style={{borderRight: "1px solid #d9b777"}} className="col-12 col-md-3 d-flex">
            <div style={{width: "120px", marginRight: "10px"}}>
              <Img fluid={data.box.childImageSharp.fluid} />
            </div>
            <div>
              <h4 className="mb-0 advantages">ENVÍOS</h4>
              <p className="advantages" style={{fontSize: ".8rem"}}>
                Fácil, rápido,  hasta la puerta de tu casa  y en zonas seleccionadas
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex">
            <div style={{width: "120px", marginRight: "10px"}}>
              <Img fluid={data.calidad.childImageSharp.fluid} />
            </div>
            <div>
              <h4 className="mb-0 advantages">FÁCIL Y SEGURO</h4>
              <p className="advantages" style={{fontSize: ".8rem"}}>
                Aceptamos todos los
                métodos de pago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 className="main-title mt-5 mb-5 text-center">Tipos de cervezas</h2>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className=" col-12 col-md-4">
            <div className="d-flex pt-3" style={{backgroundImage: `url(${data.fondo.childImageSharp.fluid.src})`}}>
              <div className="p-3" style={{width: "40%", marginRight: "10px"}}>
                <Img style={{height: "100%"}} fluid={data.lager.childImageSharp.fluid} />
              </div>
              <div style={{width: "60%"}}>
                <h4 className="advantages">Lager y Pilsen:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-4 d-flex">
            <div className="d-flex pt-3" style={{backgroundImage: `url(${data.fondo.childImageSharp.fluid.src})`}}>
              <div className="p-3" style={{width: "40%", marginRight: "10px"}}>
                <Img style={{height: "100%"}} fluid={data.lager.childImageSharp.fluid} />
              </div>
              <div style={{width: "60%"}}>
                <h4 className="advantages">Abadía:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-4 d-flex">
            <div className="d-flex pt-3" style={{backgroundImage: `url(${data.fondo.childImageSharp.fluid.src})`}}>
              <div className="p-3" style={{width: "40%", marginRight: "10px"}}>
                <Img style={{height: "100%"}} fluid={data.gueuze.childImageSharp.fluid} />
              </div>
              <div style={{width: "60%"}}>
                <h4 className="advantages">Gueuze-Lambic:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Img style={{width: '100%'}} fluid={data.slide.childImageSharp.fluid} />
          <Link
            to="/"
            style={{
              position: "absolute",
              bottom: "150px",
              right: "15%",
              fontSize: "40px",
              padding: ".3rem 5rem",
              cursor: "pointer",
              backgroundColor: "#253137",
              color: "#fff",
              borderRadius: "30px",
            }}
          >
            Ver más
          </Link>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    mapBackground: file(relativePath: {eq: "fondo-mapa.png"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    map: file(relativePath: {eq: "mapa.png"}) {
      childImageSharp {
        fluid(maxWidth: 1100, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide: file(relativePath: {eq: "galeria.png"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    botella: file(relativePath: {eq: "beer-bottle.png"}) {
      childImageSharp {
        fluid(maxWidth: 53, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
    barrio: file(relativePath: {eq: "barrio.png"}) {
      childImageSharp {
        fluid(maxWidth: 122, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
    box: file(relativePath: {eq: "box.png"}) {
      childImageSharp {
        fluid(maxWidth: 106, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
    calidad: file(relativePath: {eq: "calidad.png"}) {
      childImageSharp {
        fluid(maxWidth: 105, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
    lager: file(relativePath: {eq: "lager.png"}) {
      childImageSharp {
        fluid(maxWidth: 320, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    } 
    fondo: file(relativePath: {eq: "fondo-cerveza.png"}) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    gueuze: file(relativePath: {eq: "gueuze.png"}) {
      childImageSharp {
        fluid(maxWidth: 320, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
