import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import handleViewport from "react-in-viewport"
import AnchorLink from "react-anchor-link-smooth-scroll"

const BmbTouchStyle = styled.div`
  #jamaica {
    padding: 0px 0px 100px 0px;
    color: white;
    text-align: center;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 0px 0px 50px 0px;
    }
    h2 {
      margin: 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
    }
    .jamaica-top-3 {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 80px 0px;
      flex-wrap: wrap;

      > div {
        width: calc(100% / 3 - 25px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin-bottom: 40px;
        }
        .jamaica-top-large {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }
    .jamaica-mid-2 {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      div {
        &:nth-child(1) {
          font-size: 26px;
          line-height: 34px;
          font-weight: 500;
          text-align: left;
          width: calc(50% - 135px);
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
        }
        &:nth-child(2) {
          width: 217px;
          .gatsby-image-wrapper {
            max-width: 100%;
            picture {
              max-width: 100%;
              width: 100%;
            }
            img {
              max-width: 100%;
              width: 100%;
              height: auto !important;
            }
          }
          @media (max-width: ${variable.mobileWidth}) {
            margin: 40px 0px;
          }
        }
        &:nth-child(3) {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          text-align: left;
          width: calc(50% - 135px);
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
        }
      }
    }
    h3 {
      margin: 150px 0px 0px 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
      max-width: 650px;
      margin: 0 auto;
    }
    .jamaica-bottom-3 {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 90px;
      > div {
        width: calc(100% / 3 - 25px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        &:first-child {
          width: calc(100% / 3 - 30px);
        }
        .jamaica-bottom-large {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        @media (max-width: ${variable.mobileWidth}) {
          width: 100% !important;
          margin-bottom: 40px;
        }
      }
    }
  }
  .center-grow-small {
    &::after {
      max-width: 500px;
      margin: 0 auto;
    }
  }
  .jamaica-invest {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 50px 0px;
    margin-bottom: 85px;

    a {
      border: 1px solid #ffffff;
      padding: 10px 25px;
      border-radius: 5px;
      color: white;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      margin: 0px 20px;
      display: inline-block;
      width: auto;
      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
`
const jamaicaTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`jamaica-title centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <h2>
        Become a partner with local farmers to increase production, profits, and
        global fair trade
      </h2>
    </div>
  )
}

const jamaicaInvest = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "squaregrow" : ""
  return (
    <div
      className={`jamaica-invest  squaregrow-initial-dis ` + htmlClass}
      ref={forwardedRef}
    >
      <Container>
        <div className="jamaica-mid-2">
          <div>
            Blue Mountain Best is partnering with local farmers to increase
            production, trade and retail growth of Blue Mountain coffee.
          </div>
          <div>
            <Img fixed={props.data.whiteBmb.childImageSharp.fixed} />
            <p>
              <AnchorLink className="mt-start" href="#lpfooter">
                Get In Touch
              </AnchorLink>
            </p>
          </div>
          <div>
            Through farm syndication and community partnership, Blue Mountain
            Best brings modern agricultural methods and global investment to
            luxury coffee’s most exlcusive crop, priming Blue Mountain coffee
            for worldwide retail growth.
          </div>
        </div>
        <span class="focus-border">
          <i></i>
        </span>
      </Container>
    </div>
  )
}

const jamaicaTitle2 = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`center-grow-small centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <h3>
        Become a partner with local farmers to increase production, profits, and
        global fair trade
      </h3>
    </div>
  )
}

const JamaicaBlock = handleViewport(jamaicaTitle)

const JamaicaInvestBlock = handleViewport(jamaicaInvest)

const JamaicaBlock2 = handleViewport(jamaicaTitle2)

const Hero = () => {
  const data = useStaticQuery(graphql`
    query BmbTouchQuery {
      heroBg: file(relativePath: { eq: "MidImage1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteBmb: file(relativePath: { eq: "BMBLogo.png" }) {
        childImageSharp {
          fixed(width: 230, height: 221) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <BmbTouchStyle>
      <BackgroundImage id="jamaica" fluid={data.heroBg.childImageSharp.fluid}>
        <JamaicaInvestBlock data={data} />
        <Container>
          <JamaicaBlock2 />
          <div className="jamaica-bottom-3">
            <div>
              <div className="jamaica-bottom-large">3%</div>
              Only 3% of Jamaican coffee farmers receive proper support from
              industry actors. We commit 100% support to our partners through
              extension services and equitable investment.
            </div>
            <div>
              <div className="jamaica-bottom-large">2.5x</div>
              Using modern cultivation and global investment, Blue Mountain Best
              is more than doubling coffee yields on small farms, returning
              profits to family farmers and increasing production for global
              coffee buyers.
            </div>
            <div>
              <div className="jamaica-bottom-large">70%</div>
              Traditionally, 70% of Jamaican coffee is bought by a small group
              of traders. As a fair producer promising direct trade, BMB opens
              Jamaican coffee and local farms to countless luxury coffee
              companies desiring trade.
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </BmbTouchStyle>
  )
}

export default Hero
