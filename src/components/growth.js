import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import handleViewport from "react-in-viewport"
import * as variable from "./variables"
import scrollTo from "gatsby-plugin-smoothscroll"

const JamaicaStyle = styled.div`
  #jamaica {
    padding: 40px 0px 80px 0px;
    color: white;
    text-align: center;
    background-color: #1b5a8d;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 50px 0px 50px 0px;
    }
    h2 {
      margin: 0px;
      text-align: center;
      font-size: 30px;
      line-height: 36px;
      font-weight: normal;
      max-width: 700px;
      margin: 0 auto;
      &.h2-below {
        max-width: 775px;
      }
    }
    .jamaica-top-3 {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 80px 0px;
      flex-wrap: wrap;

      > div {
        width: calc(100% / 3 - 25px);
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin-bottom: 40px;
        }
        .jamaica-top-large {
          font-size: 25px;
          font-weight: 600;
          font-style: italic;
          line-height: 31px;
          margin-bottom: 15px;
        }
      }
    }
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
      color: #1b5a8d !important;
    }
  }
`

const jamaicaTitle = props => {
  const { inViewport, forwardedRef } = props
  return (
    <div className={`jamaica-title`}>
      <h2>
        Jamaican Blue Mountain coffee is the most sought after specialty coffee
        in the world.
      </h2>
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
      <div id="jamaica">
        <Container>
          <h2>
            Blue Mountain coffee is the most sought after specialty
            coffee in the world.
          </h2>

          <div className="jamaica-top-3">
            <div>
              <div className="jamaica-top-large">
                1,000+ Acres of Production
              </div>
              BMB manages a Blue Mountain estate with over 1,000
              acres of plantable coffee production, positioning our firm to be
              among the largest independent producers of Blue Mountain coffee.
            </div>
            <div>
              <div className="jamaica-top-large">
                $70 million / year in sales
              </div>
              Valued over $100/lb across the global market, Blue Mountain Best
              will manage a retail potential of $70 million in Blue Mountain
              coffee per year.
            </div>
            <div>
              <div className="jamaica-top-large">50% Annual ROI</div>
              Through updated commercial practices, Blue Mountain Best can
              produce coffee at 1/5 the production costs of similarly valued
              beans, yielding a significant ROI for investors.
            </div>
          </div>
          <div>
            <h2 className="h2-below">
              Blue Mountain Best is advancing commercial production for rare and
              luxurious Blue Mountain coffee.
            </h2>
            <a className="opp-mid-link" onClick={() => scrollTo("#lpfooter")}>
              Start Investing
            </a>
          </div>
        </Container>
      </div>
    </JamaicaStyle>
  )
}

export default Jamaica
