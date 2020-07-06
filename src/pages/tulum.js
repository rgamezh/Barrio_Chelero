import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const tulum = ({data}) => {

    return (
        <Layout>
            <div
                style={{
                    padding: "120px",
                    backgroundImage: `url(${data.fondo.childImageSharp.fluid.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div id="carouselExampleIndicators" className="carousel slide col-12 col-md-3" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Img fluid={data.slideone.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item">
                                    <Img fluid={data.slidetwo.childImageSharp.fluid} />
                                </div>
                                <div className="carousel-item">
                                    <Img fluid={data.slidethree.childImageSharp.fluid} /> 
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
                        <div className="col-12 col-md-9">
                            <h1 style={{fontSize: "5rem"}} className="main-title text-center">American Pale Ale</h1>
                            <p className="pt-sans-bold" style={{textAlign: "justify"}}>
                                Las American Pale Ales son de color claro, desde dorado hasta un color cobre claro. 
                                El estilo de esta cerveza generalmente se define por un equilibrio entre maltas pálidas
                                y presencia de lúpulo, aunque sin la intensidad del lúpulo o la intensidad del alcohol de un IPA. 
                                Esta es una cerveza perfecta para grandes comidas como hamburguesas a la parrilla o pizzas combinadas, 
                                así como comidas más ligeras como sushi y ensaladas verdes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout> 
    )

}

export const query = graphql`
    query {
        fondo: file(relativePath: {eq: "fondo-marca.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
        slideone: file(relativePath: {eq: "slideone.png"}) {
            childImageSharp {
              fluid(maxWidth: 290, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
        slidetwo: file(relativePath: {eq: "slidetwo.png"}) {
            childImageSharp {
              fluid(maxWidth: 290, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
        slidethree: file(relativePath: {eq: "slidethree.png"}) {
            childImageSharp {
              fluid(maxWidth: 290, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
`

export default tulum