import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import down from "../images/down.png"

const AwpFormStyle = styled.div`
  .awp-form-container {
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #00000029;
    h2 {
      margin: 0px;
      font-family: Georgia;
      font-size: 30px;
      line-height: 35px;
    }
    form {
      margin-top: 40px;
    }
    .form-row {
      margin-bottom: 20px;
    }
    .form-row-inputs {
      display: flex;
      flex-wrap: wrap;
      input {
        width: calc(100% / 2 - 5px);
        border: 2px solid #152141;
        border-radius: 5px;
        padding: 12px 12px;
        &:nth-child(1) {
          margin-right: 10px;
        }
        ::placeholder {
          color: rgba(21, 33, 65, 0.5);
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
    .form-row-inputs-email {
      input {
        width: 100%;
        margin-right: 0px !important;
      }
    }
    .form-row-inputs-phone {
      input {
        width: 100%;
        margin-right: 0px !important;
      }
    }
    .form-row-inputs-select1 {
      select {
        width: 100%;
        border: 2px solid #152141;
        border-radius: 5px;
        padding: 12px 12px;
        color: rgba(21, 33, 65, 0.5);
        font-size: 18px;
        font-weight: 400;
      }
    }
    .form-row-inputs-select2 {
      select {
        width: 100%;
        border: 2px solid #152141;
        border-radius: 5px;
        padding: 12px 12px;
        color: rgba(21, 33, 65, 0.5);
        font-size: 18px;
        font-weight: 400;
      }
    }
    p {
      font-size: 18px;
      margin: 30px 0px;
    }
    .form-row-inputs-submit {
      width: 100%;
      display: flex;
      justify-content: center;
      input {
        background-color: #1e3163;
        color: white;
        text-align: center;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
      }
    }
  }
`

const AwpForm = () => {
  const data = useStaticQuery(graphql`
    query dQuery {
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
    <AwpFormStyle>
      <div className="awp-form-container">
        <h2>
          Get more details on the top private equity opportunities for
          accredited investors.
        </h2>
        <form
          name="awp"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="awp" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-name">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name*"
                required
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name*"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-phone">
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-select1">
              <select required name="ideal-investment">
                <option value="">Ideal Investment*</option>

                <option value="25000-50000">$25,000 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000+">$250,000+</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-select2">
              <select required name="looking-to-invest">
                <option value="">I’m Looking to Invest*</option>
                <option value="immediately">Immediately</option>
                <option value="within-14-days">Within 14 days</option>
                <option value="within-1-month">Within 1 month</option>
                <option value="1month+">1 Month+</option>
              </select>
            </div>
          </div>
          <p>
            By submitting your details, you agree to the Private Policy and to
            be contacted by our team in response to your submission. You certify
            that you are an <strong>accredited investor.</strong>
          </p>

          <div className="form-row">
            <div className="form-row-inputs form-row-inputs-submit">
              <input
                type="submit"
                className="contact-submit"
                value="Get More Details"
              />
            </div>
          </div>
        </form>
      </div>
    </AwpFormStyle>
  )
}

export default AwpForm
