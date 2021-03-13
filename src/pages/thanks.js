import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Hero from "../components/herothanks"

const IndexStyle = styled.div``

const IndexPage = () => {
  return (
    <div id="oppthanks">
      <Layout>
        <IndexStyle>
          <Hero />
        </IndexStyle>
      </Layout>
    </div>
  )
}

export default IndexPage
