import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Hero from "../components/heroopp"
import Jamaica from "../components/growth"
import Mt from "../components/bmb"
import LpFooter from "../components/lpfooteropp"
import BmbTouch from "../components/bmbtouch"
const IndexStyle = styled.div`
  .squaregrow-initial {
    transition: 0.6s;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border-color: rgba(255, 255, 255, 0);
    -webkit-transition: border-color 3s linear; /* Saf3.2+, Chrome */
    -moz-transition: border-color 3s linear; /* FF3.7+ */
    -o-transition: border-color 3s linear; /* Opera 10.5 */
    transition: border-color 3s linear;
    .focus-border:before,
    .focus-border:after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 1px;
      background-color: #ffffff;
      transition: 0.6s;
      transition-delay: 1s;
    }
    .focus-border:after {
      top: auto;
      bottom: 0;
    }
    .focus-border i:before,
    .focus-border i:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 0;
      background-color: #ffffff;
      transition: 0.8s;
      transition-delay: 1s;
    }
    .focus-border i:after {
      left: auto;
      right: 0;
    }
    &.squaregrow {
      border-color: rgba(255, 255, 255, 1);
      .focus-border:before,
      .focus-border:after {
        left: 0;
        width: 100%;
        transition: 0.6s;
        transition-delay: 1s;
      }
      .focus-border i:before,
      .focus-border i:after {
        content: "";
        top: 0;
        height: 100%;
        transition: 0.8s;
        transition-delay: 1s;
      }
    }
  }
  .centergrow-initial {
    display: inline-block;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 2px #ffffff;
      transform: scaleX(0);
      transition: transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      margin-top: 5px;
    }
  }
  .centergrow {
    &:after {
      transform: scaleX(1);
      transition-delay: 1s;
    }
  }

  .leftgrow-initial {
    display: inline-block;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 3px #ffffff;
      transform: scaleX(0);
      transition: transform 800ms ease-in-out;
      transition-delay: 1s;
      margin-top: 5px;
      max-width: 85%;
    }
  }
  .leftgrow {
    &:after {
      transform-origin: 0% 50%;
      transform: scaleX(1);
      transition-delay: 1s;
    }
  }
  .leftcentergrow-initial {
    display: inline-block;
    position: relative;
    &:after {
      display: block;
      content: "";
      width: 3px;
      background-color: #23a455;
      position: absolute;
      height: calc(100% + 80px);
      top: -40px;
      transition: transform 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scaleY(0);
      transition-delay: 1s;
    }
  }
  .leftcentergrow {
    &:after {
      transform-origin: 0% 50%;
      transform: scaleY(1);
      transition-delay: 1s;
    }
  }
  .rightcentergrow-initial {
    display: inline-block;
    position: relative;
    &:after {
      display: block;
      content: "";
      width: 3px;
      background-color: #23a455;
      position: absolute;
      height: calc(100% + 80px);
      top: -40px;
      right: 0px;
      transition: transform 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scaleY(0);
      transition-delay: 1s;
    }
  }
  .rightcentergrow {
    &:after {
      transform-origin: 0% 50%;
      transform: scaleY(1);
      transition-delay: 1s;
    }
  }
`

const IndexPage = () => {
  return (
    <div id="opp">
      <Layout>
        <IndexStyle>
          <Hero />
          <Jamaica />
          <BmbTouch />
          <Mt />
          <LpFooter />
        </IndexStyle>
      </Layout>
    </div>
  )
}

export default IndexPage
