import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as variable from "../components/variables"
import styled from "styled-components"
import Container from "../components/container"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import loadable from "@loadable/component"

const InsightsStyle = styled.div``

const InsightsHeader = styled.div`
  margin-bottom: 40px;
  .blog-header-container {
    min-height: 530px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    .blog-post-image-title {
      color: white;
      font-family: "Libre Franklin";
      font-weight: 800;
      font-size: 54px;
      line-height: 72px;
      margin-bottom: 20px;
    }
  }
  position: relative;
  &:after {
    width: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 100px;
    position: absolute;
    bottom: 0px;
    content: "";
  }
`

const Post = props => {
  // const prismicContent = props.data.prismic.allBlog_posts.edges[0]
  // if (!prismicContent) return null
  // const node = props.data.page.data
  // const site = props.data.site

  // const defaultBlock = props.data.prismic.allBlocks.edges[0].node
  // const site = props.data.prismic.allSite_informations.edges[0].node

  return (
    <Layout>
      <InsightsStyle>
        <Container>
          <h1>Insights</h1>
        </Container>
      </InsightsStyle>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query Insights {
    blogbg: file(relativePath: { eq: "defaultheader.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site: allPrismicSiteInformation {
      nodes {
        data {
          description {
            text
          }
          site_url {
            text
          }
          site_title {
            text
          }
          twitter_author {
            text
          }
        }
      }
    }
  }
`
