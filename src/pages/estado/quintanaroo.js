import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Img from "gatsby-image"

const SecondPage = () => {
  
    const data = useStaticQuery(graphql`
        query {
            tulum: file(relativePath: { eq: "tulum.png" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            pescadores: file(relativePath: { eq: "pescadores.png" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            beer: file(relativePath: { eq: "beer.png" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            deco: file(relativePath: { eq: "deco.png" }) {
                childImageSharp {
                  fluid(maxWidth: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1 className="main-title text-center pt-5">Tenemos las cervezas que te gustan</h1>
            <Img style={{width: "70px", margin: "0 auto"}} fluid={data.deco.childImageSharp.fluid} />
            <div style={{marginBottom: "250px"}} id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <Link
                                    className="col-12 col-md-4"
                                    to="/"
                                >
                                    <Img style={{height: "380px"}} fluid={data.tulum.childImageSharp.fluid} />
                                </Link>
                                <Link
                                    className="col-12 col-md-4"
                                    to="/"
                                >
                                    <Img style={{height: "380px"}} fluid={data.beer.childImageSharp.fluid} />
                                </Link>
                                <Link
                                    className="col-12 col-md-4"
                                    to="/"
                                >
                                    <Img style={{height: "380px"}} fluid={data.pescadores.childImageSharp.fluid} />
                                </Link>
                            </div>
                        </div>
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

}

export default SecondPage