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

const HeroStyle = styled.div`
  height: 100%;
  color: #1f6390 !important;
  font-family: meno-banner, serif !important;
  font-weight: 400;
  .gatsby-image-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .thank-you-box {
      background-color: white;
      padding: 40px;
      border-radius: 5px;
      min-width: 450px;
      @media (max-width: ${variable.mobileWidth}) {
        min-width: 0px;
      }
      h2 {
        font-size: 35px;
        font-weight: 900;
        margin: 0px;
        color: #1f6390 !important;
      }
      p {
        font-size: 20px;
        line-height: 26px;
        color: #1f6390 !important;
        margin: 0px;
        font-weight: 500;
      }
      a {
        margin-top: 40px;
        font-size: 21px;
        color: #1f6390 !important;
        display: block;
        text-decoration: underline;
        font-weight: 700;
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
          <div className="thank-you-box">
            <h2>Thank You.</h2>
            <p>Your submission has been received.</p>
            <Link to="/opportunity">Back to the landing page.</Link>
          </div>
        </BackgroundImage>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HerosThanksQuery {
        heroBg: file(relativePath: { eq: "FooterLighter.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
