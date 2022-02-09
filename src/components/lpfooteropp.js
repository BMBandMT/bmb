import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import down from "../images/down.png"
import handleViewport from "react-in-viewport"

const LpfooterStyle = styled.div`
  #lpfooter {
    padding: 100px 0px 60px 0px;
    * {
      color: #ffffff;
    }
    h2 {
      color: #ffffff;
      text-align: center;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      margin: 0 auto;
      padding-bottom: 3px;
    }
    h3 {
      text-align: center;
      font-size: 40px;
      line-height: 48px;
      font-weight: normal;
      font-style: italic;
      margin: 0px;
    }
    .centergrow-initial {
      margin: 0 auto;
      max-width: 500px;
      display: block;
      &:after {
        border-bottom: solid 2px #ffffff;
      }
    }
    p {
      text-align: center;
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      max-width: 910px;
      margin: 20px auto 0px auto;
      span.footer-mt {
        color: #23a455;
      }
      span.footer-bmb {
        color: #ffffff;
      }
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      max-width: 730px;
      margin: 40px auto;
      position: relative;
      left: -80px;
      @media (max-width: ${variable.tabletWidth}) {
        left: auto;
      }
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 24px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
        }
        label {
          width: 160px;
          font-size: 17px;
          line-height: 23px;
          font-weight: bold;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            text-align: center;
          }
        }
        .form-row-inputs {
          width: calc(100% - 160px);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: column;
            width: calc(100%);
          }
          &.form-row-inputs-certify {
            @media (max-width: ${variable.mobileWidth}) {
              flex-direction: row;
            }
          }
          &.form-row-inputs-name {
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-city {
            justify-content: flex-start;
            input {
              width: calc(100% / 3 - 10px);
              &:nth-child(1) {
                margin-right: 20px;
              }
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
                &:nth-child(1) {
                  margin-right: 0px;
                }
              }
            }
          }
          &.form-row-inputs-email {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-phone {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-hear {
            justify-content: flex-start;
            select {
              width: calc(100% / 2 - 10px);
              position: relative;
              &:before {
                content: "\u2193";
                font-size: 20px;
                position: absolute;
                top: 20px;
                right: 20px;
                color: #ffffff;
              }
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-submit {
            justify-content: center;
          }
          &.form-row-inputs-certify {
            justify-content: center;
          }
          &.form-row-inputs-time {
            .radio-container {
              width: calc(100% / 4 - 10px);
              display: flex;
              align-items: center;
              position: relative;
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
              input {
                height: 41px;
                margin: 0px;
                cursor: pointer;
                &:checked {
                  border: #23a455 2px solid;
                }
                &:focus {
                  outline: none;
                }
              }
              div {
                position: absolute;
                left: 50%;
                margin-left: -40px;
                width: 80px;
                text-align: center;
                z-index: -10;
              }
            }
          }
        }
        input[type="text"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="email"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="phone"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="radio"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="checkbox"] {
          background: transparent;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          margin-right: 5px;
          padding: 5px;
          position: relative;
          margin-right: 15px;
          &:checked {
            &:before {
              content: "x";
              position: absolute;
              top: -3px;
              left: 2px;
            }
          }
          &:focus {
            outline: none;
          }
        }
        input.contact-submit {
          background: transparent;
          color: #ffffff;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 30px;
          font-size: 17px;
          font-weight: 400;
          display: inline-block;
          cursor: pointer;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
          &:hover {
            color: rgb(27, 90, 141) !important;
            background-color: #ffffff;
          }
        }
        select {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #ffffff;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          background-image: url(${down});
          background-size: 20px;
          background-position: right 20px center;
          background-repeat: no-repeat;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ffffff;
            font-size: 17px;
            font-weight: 400;
          }
        }
        .hidden {
          display: none;
          -webkit-appearance: none;
        }
        .contact-submit {
          color: white;
          background-color: #1e5b8d;
          padding: 12px 70px;
          font-size: 21px;
          font-weight: bold;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`
const formTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div className={`centergrow-initial ` + htmlClass} ref={forwardedRef}>
      <h2>A unique opportunity for accredited investors.</h2>
    </div>
  )
}
const TitleBlock = handleViewport(formTitle)

const opts = {
  width: "500",
  height: "285",
}
const LpFooter = () => {
  const data = useStaticQuery(graphql`
    query LpOppQuery {
      footerBg: file(relativePath: { eq: "FooterLighter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LpfooterStyle>
      <BackgroundImage
        id="lpfooter"
        fluid={data.footerBg.childImageSharp.fluid}
      >
        <Container>
          <h2>Invest in Blue Mountain coffee.</h2>
          <h3>The World’s Most Sought After</h3>
          <div className="form-copy">
            <p>
              With a minimum investment of $25,000, investing in Blue Mounatin
              Best secures profit from our luxury coffee estate. If you’re an
              accredited investor and woud like to learn more, please fill out
              the form below and our team will reach out to you.
            </p>
          </div>
          <form
            name="opportunity-new-2022"
            method="POST"
            action="/thank-you"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input
              type="hidden"
              name="form-name"
              value="opportunity-new-2022"
            />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-row">
              <label>Your Name*</label>
              <div className="form-row-inputs form-row-inputs-name">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First"
                  required
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label>Your Email*</label>
              <div className="form-row-inputs form-row-inputs-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. hello@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label>Your Phone*</label>
              <div className="form-row-inputs form-row-inputs-phone">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="####"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-certify">
                <input type="checkbox" id="certify" name="certify" required />{" "}
                *I certify that I am an accredited investor.
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-submit">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </Container>
      </BackgroundImage>
    </LpfooterStyle>
  )
}

export default LpFooter
