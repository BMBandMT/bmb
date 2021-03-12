import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import handleViewport from "react-in-viewport"
import * as variable from "./variables"

const JamaicaStyle = styled.div`
  #jamaica {
    padding: 175px 0px 100px 0px;
    color: white;
    text-align: center;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 50px 0px 50px 0px;
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
      div {
        &:first-child {
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          text-align: left;
          width: 50%;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
        }
        &:last-child {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          text-align: left;
          width: 48%;
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
  .jamaica-invest {
    padding: 50px 20px;
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
      <h2>Worldwide Retail Growth for Luxury Blue Mountain Coffee</h2>
    </div>
  )
}

const jamaicaInvest = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "squaregrow" : ""
  return (
    <div
      className={`jamaica-invest  squaregrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <div className="jamaica-mid-2">
        <div>
          Massive Therapeutics and Blue Mountain Best are revolutionizing
          investment in Jamaica's Blue Mountains.
        </div>
        <div>
          Investment in Massive Therapeutics and Blue Mountain Best ties the
          market potentials of legal cannabis to the global revenues of
          exclusive luxury coffee. Together, we accelerate Jamaica's potential
          to lead the cannabis industry and advance global retail growth for the
          island's historic coffee.
        </div>
      </div>
      <span class="focus-border">
        <i></i>
      </span>
    </div>
  )
}

const jamaicaTitle2 = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div className={`centergrow-initial ` + htmlClass} ref={forwardedRef}>
      <h3>Worldwide Growth for Luxury Blue Mountain Coffee</h3>
    </div>
  )
}

const JamaicaBlock = handleViewport(jamaicaTitle)

const JamaicaInvestBlock = handleViewport(jamaicaInvest)

const JamaicaBlock2 = handleViewport(jamaicaTitle2)

const Jamaica = () => {
  const data = useStaticQuery(graphql`
    query GrowtherQuery {
      jamBg2: file(relativePath: { eq: "jamaicabgtrans.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <JamaicaStyle>
      <BackgroundImage id="jamaica" fluid={data.jamBg2.childImageSharp.fluid}>
        <Container>
          <JamaicaBlock />
          <div className="jamaica-top-3">
            <div>
              <div className="jamaica-top-large">$120/lb</div>
              Jamaican Blue Mountain coffee is among the world’s oldest and most
              expensive luxury coffees, routinely valued over $100 per pound at
              market.
            </div>
            <div>
              <div className="jamaica-top-large">1,500+</div>
              Producing on a fair trade estate and partnered with hundreds of
              local farmers, Blue Mountain Best will produce and process coffee
              on over 1,500 acres.
            </div>
            <div>
              <div className="jamaica-top-large">$70 million</div>
              Guaranteeing direct trade with coffee companies around the world,
              Blue Mountain Best will supply a retail value of $70 million in
              Blue Mountain coffee to the luxury market per year.
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </JamaicaStyle>
  )
}

export default Jamaica
