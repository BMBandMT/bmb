import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import YouTube from "react-youtube"
import * as variable from "./variables"
import handleViewport from "react-in-viewport"
import AnchorLink from "react-anchor-link-smooth-scroll"

const MtStyle = styled.div`
  #mt {
    padding: 0px 0px 100px 0px;
    min-height: 800px;
    color: white;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 100px 0px;
    }
    .mt-top-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      div {
        &:nth-child(1) {
          width: 50%;
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            margin-bottom: 20px;
          }
          span {
            color: #23a455;
            font-weight: 900;
          }
        }
        &:nth-child(2) {
          width: 45%;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
          p {
            margin-top: 0px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            span {
              color: #23a455;
            }
          }
        }
      }
    }
    .mt-top-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 70px 0px;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      .mt-top-3-item-right {
        .mt-top-3-item-inner {
          padding-right: 20px;
        }
      }
      .mt-top-3-item-left {
        .mt-top-3-item-inner {
          padding-left: 20px;
        }
      }
      .mt-top-3-item {
        width: calc(100% / 3 - 20px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin: 20px 0px;
        }
        .mt-top-3-item-inner {
          :nth-child(1) {
            margin-bottom: 55px;
          }
        }
        .mt-top-3-header {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      }
      .mt-top-3-item-center {
        .gatsby-image-wrapper {
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
    .mt-video {
      text-align: center;
      padding: 20px 0px;
      max-width: 585px;
      margin: 0 auto;
    }
    .mt-secure {
      padding: 100px 0px;
      text-align: center;
      .mt-secure-header {
        font-size: 28px;
        line-height: 37px;
        font-weight: 500;
        max-width: 600px;
        margin: 0 auto;
      }
      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        max-width: 750px;
        margin: 20px auto;
      }
      .mt-start {
        border: 1px solid #ffffff;
        padding: 10px 25px;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;
        margin: 10px 20px;
        display: inline-block;
        &:hover {
          color: black;
          background-color: white;
        }
      }
    }
    .bmb-bottom-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      div {
        &:nth-child(1) {
          width: 50%;
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            margin-bottom: 20px;
          }
          span {
            color: #164871;
            font-weight: 900;
          }
        }
        &:nth-child(2) {
          width: 45%;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
          p {
            margin-top: 0px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
    .bmb-bottom-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 70px 0px;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      .bmb-bottom-3-item-right {
        .bmb-bottom-3-item-inner {
          padding-right: 20px;
        }
        &.rightcentergrow-initial {
          &:after {
            background-color: white;
          }
        }
      }
      .bmb-bottom-3-item-left {
        .bmb-bottom-3-item-inner {
          padding-left: 20px;
        }
        &.leftcentergrow-initial {
          &:after {
            background-color: white;
          }
        }
      }
      .bmb-bottom-3-item {
        width: calc(100% / 3 - 20px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        &.leftcentergrow-initial {
          &:after {
            background-color: white;
          }
        }
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin: 20px 0px;
        }
        .bmb-bottom-3-item-inner {
          :nth-child(1) {
            margin-bottom: 55px;
          }
        }
        .bmb-bottom-3-header {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      }
      .bmb-bottom-3-item-center {
        .gatsby-image-wrapper {
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
    .bmb-video {
      text-align: center;
      padding: 20px 0px;
      max-width: 585px;
      margin: 0 auto;
    }
  }
  iframe {
    max-width: 100%;
  }
  .center-grow-small {
    &::after {
      max-width: 400px;
      margin: 0 auto;
    }
  }
`
const mtLeft = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "leftgrow" : ""
  return (
    <div className={`mt-left leftgrow-initial ` + htmlClass} ref={forwardedRef}>
      <span>Massive Therapeutics</span> is a medical and recreational cannabis
      producer based in Jamaica, ready to supply the global industry with
      affordable cannabis.
    </div>
  )
}

const mtLeftCenter = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "leftcentergrow" : ""
  return (
    <div className={`leftcentergrow-initial ` + htmlClass} ref={forwardedRef}>
      <div className="mt-top-3-item-inner">
        <div className="mt-top-3-header">50</div>
        Massive Therapeutics will scale to 50 modern hybrid cannabis greenhouses
        in three years.
      </div>
      <div className="mt-top-3-item-inner">
        <div className="mt-top-3-header">$46 million</div>
        Massive Therapeutics’ greenhouses will grow nearly 25 million grams of
        cannabis each year, a wholesale value of over $46 million.
      </div>
    </div>
  )
}

const mtRightCenter = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "rightcentergrow" : ""
  return (
    <div className={`rightcentergrow-initial ` + htmlClass} ref={forwardedRef}>
      <div className="mt-top-3-item-inner">
        <div className="mt-top-3-header">$100</div>
        Massive Therapeutics’ expenses to grow one pound of cannabis amount to
        $100. In Canada, costs exceed $400 for the same amount
      </div>
      <div className="mt-top-3-item-inner">
        <div className="mt-top-3-header">30%</div>
        As a result, Massive Therapeutics can sell cannabis at roughly 30% the
        wholesale cannabis price in North America.
      </div>
    </div>
  )
}

const mtVideo = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "squaregrow" : ""
  return (
    <div
      className={`mt-video squaregrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <YouTube videoId="q8nNmqFWtCM" opts={opts} />
      <span class="focus-border">
        <i></i>
      </span>
    </div>
  )
}

const mtSecureHeader = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`center-grow-small centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <div className="mt-secure-header">
        Secure a stake in a historic luxury product. Invest in worldwide retail
        growth.
      </div>
    </div>
  )
}

const bmbLeft = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "leftgrow" : ""
  return (
    <div className={`leftgrow-initial ` + htmlClass} ref={forwardedRef}>
      <span>Blue Mountain Best</span> is a producer and processor of Jamaican
      Blue Mountain coffee, championing equity for small farmers and worldwide
      retail growth for a historic luxury product.
    </div>
  )
}

const bmbLeftCenter = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "leftcentergrow" : ""
  return (
    <div
      className={
        `bmb-bottom-3-item bmb-bottom-3-item-left leftcentergrow-initial ` +
        htmlClass
      }
      ref={forwardedRef}
    >
      <div className="bmb-bottom-3-item-inner">
        <div className="bmb-bottom-3-header">500</div>
        Blue Mountain Best will operate among the largest coffee growing estates
        in the Blue Mountains, totaling over 500 acres.
      </div>
      <div className="bmb-bottom-3-item-inner">
        <div className="bmb-bottom-3-header">1,000+</div>
        As a coffee processor, Blue Mountain Best partners with over 400 small
        family farmers in the Blue Mountains, together totaling over 1,000
        acres.
      </div>
    </div>
  )
}

const bmbRightCenter = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "rightcentergrow" : ""
  return (
    <div
      className={
        `bmb-bottom-3-item bmb-bottom-3-item-right rightcentergrow-initial ` +
        htmlClass
      }
      ref={forwardedRef}
    >
      <div className="bmb-bottom-3-item-inner">
        <div className="bmb-bottom-3-header">2.5x</div>
        Blue Mountain Best’s coffee production more than doubles the region’s
        average, while working to improve cultivation on small farms.
      </div>
      <div className="bmb-bottom-3-item-inner">
        <div className="bmb-bottom-3-header">850k</div>
        At full potential, Blue Mountian Best will export over 850,000 pounds of
        certified Blue Mountain coffee each year, a retail value over $70
        million.
      </div>
    </div>
  )
}

const bmbVideo = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "squaregrow" : ""
  return (
    <div
      className={`bmb-video squaregrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <YouTube videoId="v_sTDh5rOag" opts={opts} />
      <span class="focus-border">
        <i></i>
      </span>
    </div>
  )
}

const MtLeftBlock = handleViewport(mtLeft)

const MtLeftCenterBlock = handleViewport(mtLeftCenter)

const MtRightCenterBlock = handleViewport(mtRightCenter)

const MtVideoBlock = handleViewport(mtVideo)

const MtSecureHeaderBlock = handleViewport(mtSecureHeader)

const BmbLeftBlock = handleViewport(bmbLeft)

const BmbLeftCenterBlock = handleViewport(bmbLeftCenter)

const BmbRightCenterBlock = handleViewport(bmbRightCenter)

const BmbVideoBlock = handleViewport(bmbVideo)

const opts = {
  width: "500",
  height: "285",
}
const Mt = () => {
  const data = useStaticQuery(graphql`
    query BmbQuery {
      mtBg: file(relativePath: { eq: "MidImage2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mtLogo: file(relativePath: { eq: "LandingpageMTlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bmbLogo: file(relativePath: { eq: "BMBLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MtStyle>
      <BackgroundImage id="mt" fluid={data.mtBg.childImageSharp.fluid}>
        <Container>
          <div className="mt-secure">
            <MtSecureHeaderBlock />
            <p>
              Directly invest in Blue Mountain Best and become a partner with
              local farms to share in the profits of luxury Blue Mountain
              Coffee.
            </p>
            <AnchorLink className="mt-start" href="#lpfooter">
              Get Started
            </AnchorLink>
          </div>
          <div className="bmb-bottom-2">
            <BmbLeftBlock />
            <div>
              <p>
                Blue Mountain Best uses farm syndication to bring equitable
                investment to community farms, champion direct trade, and
                introduce the historic profits of the specialty coffee market to
                sought after Blue Mountain coffee.
              </p>
              <p>
                “With many consumers unable to buy coffee in person,” the{" "}
                <span>US Chamber of Commerce</span> wrote recently, “[luxury]
                coffee companies that offer home delivery are seeing strong
                demand.”
              </p>
            </div>
          </div>
          <div className="bmb-bottom-3">
            <BmbLeftCenterBlock />
            <div className="bmb-bottom-3-item bmb-bottom-3-item-center">
              <Img fluid={data.bmbLogo.childImageSharp.fluid} />
            </div>
            <BmbRightCenterBlock />
          </div>
          <BmbVideoBlock />
        </Container>
      </BackgroundImage>
    </MtStyle>
  )
}

export default Mt
