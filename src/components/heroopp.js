import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { DefaultPlayer as Video } from "react-html5video"
import "react-html5video/dist/styles.css"
import GrowVideo from "../videos/JustCoffeeAnimation.webm"
import { isSafari } from "react-device-detect"
import BeanImage from "../images/beanvector.png"
import CannabisImage from "../images/cannabisvector.png"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroStyle = styled.div`
  #hero {
    transition: 0.5s;

    color: white;
    // display: flex;
    // align-items: flex-end;
    // justify-content: center;
    padding-bottom: 40px;
    padding-top: 50px;

    * {
      color: white;
    }

    .hero-container {
      /* max-width: 720px;
      margin: 0px; */
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 800px;
      .thelogo {
        position: absolute !important;
        top: 30px;
        right: 30px;
        z-index: 9999;
        width: 94px;
      }

      .hero-inner {
        max-width: 720px;
        @media (max-width: ${variable.mobileWidth}) {
          margin-top: 150px;
        }
      }
      padding: 0px 60px;
      @media (max-width: ${variable.mobileWidth}) {
        min-height: 650px;
        padding: 0px 20px;
      }
      h3 {
        font-size: 20px;
        margin: 0px;
      }
      h2 {
        font-size: 60px;
        margin: 20px 0px;
        max-width: 500px;
      }
      p {
        font-size: 20px;
        font-weight: normal;
        margin: 0px;
        line-height: 24px;
        max-width: 520px;
      }
      a {
        font-size: 20px;
        font-weight: bold;
        border: thin solid white;
        padding: 7px 25px;
        border-radius: 3px;
        margin-top: 30px;
        display: inline-block;
        cursor: pointer;
        &:hover {
          background-color: white;
          color: #1b5a8d;
        }
      }
    }
  }
`

class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HeroStyle>
        <BackgroundImage
          id="hero"
          fluid={this.props.data.heroBg.childImageSharp.fluid}
        >
          <Container className="hero-container">
            <Img
              className="thelogo"
              fluid={this.props.data.logo.childImageSharp.fluid}
            />
            <div className="hero-inner">
              <h3>JAMAICAN BLUE MOUNTAIN COFFEE</h3>
              <h2>Invest in luxury coffee production</h2>
              <p>
                Blue Mountain Best is a producer of Jamaican Blue Mountain
                coffee, among the most rare and sought after specialty coffees
                in the world. Advancing agricultural production in a thriving
                coffee industry, Blue Mountain Best, incorporated in the U.S.,
                is accelerating a beloved and historic coffee product worldwide.
              </p>
              <a
                className="opp-hero-link"
                onClick={() => scrollTo("#lpfooter")}
              >
                Get Started
              </a>
            </div>
          </Container>
        </BackgroundImage>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HerosOppQuery {
        heroBg: file(relativePath: { eq: "LandingPageheaderLight.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroArrow: file(relativePath: { eq: "arrow-down-center.png" }) {
          childImageSharp {
            fixed(width: 142, height: 396) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        leftArrow: file(relativePath: { eq: "leftdownarrow.png" }) {
          childImageSharp {
            fixed(width: 142, height: 690) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logo: file(relativePath: { eq: "BlueMountainBestLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroVideo: file(relativePath: { eq: "hero.mov" }) {
          absolutePath
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
