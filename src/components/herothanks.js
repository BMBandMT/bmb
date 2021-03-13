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
  .gatsby-image-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .thank-you-box {
      background-color: white;
      padding: 40px;
      border-radius: 10px;
      h2 {
        font-size: 30px;
        color: black;
        margin: 0px;
      }
      p {
        font-size: 20px;
        line-height: 26px;
        color: black;
        margin: 0px;
      }
      a {
        margin-top: 20px;
        color: black;
        display: block;
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
            <h2>Thank You!</h2>
            <p>Your form submission has been reveived.</p>
            <Link to="/">Back to our website.</Link>
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
        heroBg: file(relativePath: { eq: "herobg.png" }) {
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
