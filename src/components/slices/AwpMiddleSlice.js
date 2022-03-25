import React from "react"
import Container from "../container"
import styled from "styled-components"
import * as variable from "../variables"
import AwpForm from "../awpform"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const AwpStyle = styled.div`
  padding: 75px 0px;
  .discover-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .what-are-link {
      cursor: pointer;
    }
    .column-item {
      width: calc(50% - 20px);
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
      }
      &:nth-child(1) {
        p {
          font-size: 20px;
          line-height: 25px;
        }
        strong {
        }
        h2 {
          font-size: 45px;
          font-weight: 400;
          font-family: Georgia;

          strong {
            font-weight: bold;
          }
        }
        h3 {
          color: #1e3163;
          position: relative;
          &:after {
            content: " ";
            width: 133px;
            height: 1px;
            background-color: #1e3163;
            position: absolute;
            left: 0px;
            bottom: -10px;
          }
        }
        ul {
          position: relative;
          margin: 40px 0px;
          padding: 20px 0px;
          font-size: 20px;
          line-height: 25px;
          &:before {
            content: " ";
            width: 133px;
            height: 1px;
            position: absolute;
            left: 0px;
            top: -10px;
          }
          &:after {
            content: " ";
            width: 133px;
            height: 1px;

            position: absolute;
            left: 0px;
            bottom: -10px;
          }
          li {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            &:nth-child(1) {
              margin-top: 0px;
            }
            &:before {
              border: thin solid #1f3264;
              border-radius: 5px;
              height: 30px;
              width: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              margin-right: 20px;
              content: "+";
            }
          }
        }
        .featured-opp {
          background-color: #1e3163;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          font-size: 20px;
          font-weight: bold;
          display: inline-block;
          padding: 20px 35px;
        }
      }
      &:nth-child(2) {
        position: relative;
        top: -180px;
        @media (max-width: ${variable.mobileWidth}) {
          top: 0px;
          margin-top: 60px;
        }
      }
    }
  }
  .icons-column {
    margin: 40px 0px 130px 0px;
    display: flex;
    justify-content: space-between;
    border-top: thin solid #707070;
    padding-top: 40px;
    border-bottom: thin solid #707070;
    padding-bottom: 40px;
    flex-wrap: wrap;
    @media (max-width: ${variable.mobileWidth}) {
      margin: 100px 0px 100px 0px;
      padding-top: 100px;
    }
    .icons-column-item {
      width: calc(100% / 4 - 30px);
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        margin-bottom: 40px;
      }
      .bi {
        width: 28px;
        height: 28px;
      }
      h2 {
        font-size: 20px;
        font-weight: bold;
        font-family: Georgia;
      }
      p {
        font-size: 20px;
      }
    }
  }
  .featured-container {
    display: flex;
    justify-content: space-between;
    color: white !important;
    flex-wrap: wrap;
    h2 {
      color: white;
      font-weight: 400;
      font-family: Georgia;
      font-size: 40px;
      margin-top: 0px;
      strong {
        color: white;
        font-weight: bold;
      }
    }
    p {
      color: white;
      font-size: 20px;
    }
    ul {
      position: relative;
      margin: 40px 0px;
      padding: 20px 0px;
      font-size: 20px;
      line-height: 25px;
      &:before {
        content: " ";
        width: 133px;
        height: 1px;
        position: absolute;
        left: 0px;
        top: -10px;
      }
      &:after {
        content: " ";
        width: 133px;
        height: 1px;

        position: absolute;
        left: 0px;
        bottom: -10px;
      }
      li {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
        &:nth-child(1) {
          margin-top: 0px;
        }
        &:before {
          border: thin solid white;
          border-radius: 5px;
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-right: 20px;
          color: white;

          content: "+";
        }
      }
    }
    .featured-left-bg {
      width: 50%;
      padding: 50px 30px;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
      }
      .featured-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
      h3 {
        font-size: 70px;
        font-family: Georgia;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.3);
        margin: 0px;
        @media (max-width: ${variable.mobileWidth}) {
          font-size: 40px;
        }
      }
    }
    .featured-right {
      width: 50%;
      background-color: #1e3163;
      padding: 50px 30px;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
      }
      .investment-form {
        background-color: white;
        color: #1e3163;
        cursor: pointer;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        display: inline-block;
        padding: 20px 35px;
      }
    }
  }
`
export const AwpMiddleSlice = ({ slice }) => {
  const data = useStaticQuery(graphql`
    query awpmiddle {
      awpBackground: file(relativePath: { eq: "awp-middle-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      investBackground: file(relativePath: { eq: "invest-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage fluid={data.awpBackground.childImageSharp.fluid}>
      <Container>
        <AwpStyle>
          <div class="middle-section">
            <div className="column discover-form">
              <div class="column-item">
                <h3>BENEFITS</h3>
                <h2>
                  Discover leading <strong>private equity opportunities</strong>{" "}
                  in the United States.
                </h2>
                <ul>
                  <li>Lucrative industries with early access opportunities.</li>
                  <li>Long term growth potential.</li>
                  <li>Innovative markets and legacy investments.</li>
                </ul>
                <div className="middle-discover-button">
                  <div
                    className="featured-opp"
                    onClick={() => scrollTo(".featured-section")}
                  >
                    Featured Opportunity
                  </div>
                </div>
                <p>
                  <div
                    className="what-are-link"
                    onClick={() => scrollTo("#slice-id-about-awp")}
                  >
                    <strong>What are alternative investments?</strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-right-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                  </div>
                </p>
              </div>
              <div class="column-item">
                <div id="middle-form">
                  <AwpForm />
                </div>
              </div>
            </div>
          </div>
          <div class="middle-section">
            <div class="icons-column">
              <div class="icons-column-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <h2>Diverse Portfolio</h2>
                <p>
                  A diverse portfolio reduces the impact of market volatility by
                  having multiple investment instruments.
                </p>
              </div>
              <div class="icons-column-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                <h2>Private Markets</h2>
                <p>
                  Access private companies that are not correlated to stocks,
                  bonds or unpredictable markets.
                </p>
              </div>
              <div class="icons-column-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <h2>Early Entry</h2>
                <p>
                  Enter up-and-coming companies with potential for significant
                  growth and sustained profits.{" "}
                </p>
              </div>
              <div class="icons-column-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bounding-box"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                </svg>
                <h2>Low Correlation</h2>
                <p>
                  Access investments and funds that are less volatile and
                  uncorrelated to the rise and fall of public markets.
                </p>
              </div>
            </div>
          </div>
          <div class="featured-section">
            <div className="featured-container">
              <BackgroundImage
                fluid={data.investBackground.childImageSharp.fluid}
                className="featured-left-bg"
              >
                <div className="featured-left">
                  <div>
                    <h2>
                      Featured private equity <strong>opportunity.</strong>
                    </h2>
                    <p>
                      “Coffee bean prices have doubled in the past year and may
                      double again.”— World Nation News, Sept. 2021
                    </p>
                  </div>
                  <h3>FEATURED</h3>
                </div>
              </BackgroundImage>
              <div className="featured-right">
                <h2>
                  The most sought after <strong>speciality</strong> coffee in
                  the world.
                </h2>
                <p>
                  Valued over $100/lb across the global market with retail
                  potential of $70 million in coffee per year.
                </p>
                <ul>
                  <li>$70 million/year in sales.</li>
                  <li>50% annual ROI</li>
                  <li>1,000+ Acres of Production</li>
                </ul>
                <div
                  className="investment-form"
                  onClick={() =>
                    scrollTo("#slice-id-awp-benefits .awp-form-container")
                  }
                >
                  Get Full Investment Details
                </div>
              </div>
            </div>
          </div>
        </AwpStyle>
      </Container>
    </BackgroundImage>
  )
}

export default AwpMiddleSlice
