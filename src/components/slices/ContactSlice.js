import React from "react"
import Container from "../container"
import styled from "styled-components"

const ContactStyle = styled.div`
  padding: 75px 0px;
  margin: 0 auto;
  max-width: 900px;
  .contact-outer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contact-form-left {
    width: calc(75% - 35px);
  }
  .contact-form-right {
    width: 25%;
  }
  input {
    width: 100%;
    -webkit-appearance: none;
    border: 3px solid #1e5b8d;
    border-radius: 7px;
    padding: 15px 20px;
    font-size: 17px;
    font-weight: 300;
    &::placeholder {
      color: #1e5b8d;
      font-size: 17px;
      font-weight: 300;
    }
  }
  textarea {
    width: 100%;
    -webkit-appearance: none;
    border: 3px solid #1e5b8d;
    border-radius: 7px;
    padding: 15px 20px;
    height: 240px;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
    &::placeholder {
      color: #1e5b8d;
      font-size: 17px;
      font-weight: 300;
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
    margin-top: 25px;
  }
  .email-phone {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 25px 0px;
    input {
      width: calc(50% - 6px);
    }
  }
`
export const ContactSlice = ({ slice }) => {
  return (
    <Container>
      <ContactStyle>
        <div className="contact-outer">
          <div className="contact-form-left">
            <p>
              If you’re a coffee buyer, trader or roaster seeking a producer in
              Jamaica, or an investor interested in exclusive Blue Mountain
              coffee production, reach out.
            </p>
            s
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <input type="text" id="name" name="name" placeholder="Name" />
              <div className="email-phone">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>

              <textarea id="message" name="message" placeholder="Message" />

              <input type="submit" className="contact-submit" value="Submit" />
            </form>
          </div>
          <div className="contact-form-right">
            <div className="contact-phone">
              <a href="tel:1.800.626.3521">1.800.626.3521</a>
            </div>
            <div className="contact-email">
              <a href="mailto:contact@bluemountainbest.com">
                contact@bluemountainbest.com
              </a>
            </div>
            <div className="contact-address">
              <div>Blue Mountain Best</div>
              <div>Sheridan, Wyoming WyomingWyoming</div>
            </div>
          </div>
        </div>
      </ContactStyle>
    </Container>
  )
}

export default ContactSlice
