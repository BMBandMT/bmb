import React from "react"
import * as variable from "../../variables"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Date } from "prismic-reactjs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPostTeaserStyle = styled.article`
  padding: 15px;
  padding-bottom: 85px;
  text-decoration: none;
  position: relative;
  .blog-teaser-title {
    display: block;
    h2 {
      font-size: 30px;
      line-height: 40px;
      font-weight: 400;
    }
  }
  p {
    font-size: 25px;
    line-height: 40px;
    font-weight: 300;
  }
  .blog-teaser-image {
    margin-bottom: 20px;
  }
  .cta-button {
    // position: absolute;
    // bottom: 45px;
    // left: 35px;
    font-size: 23px;
    color: ${variable.blue};
  }
  .blog-teaser-image-container {
    height: 295px;
    width: 100%;
    margin-bottom: 20px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    &:before {
      background-size: cover;
      border-radius: 10px;
    }
  }
  .blog-teaser-links {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background-color: ${variable.red};
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    min-width: 124px;
    padding: 12px 20px;
    border: 1px solid transparent;
    -webkit-transition: background-color 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
    position: absolute;
    bottom: 35px;
    &:hover {
      background-color: ${variable.darkGray};
    }
  }
  .release-date {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
  }
  .blog-author {
    font-weight: 700;
    font-size: 18px;
  }
  svg {
    margin-right: 7px;
    font-size: 20px;
  }
`

function returnImage(post) {
  if (post.data.main_image.localFile != null) {
    if (post.data.main_image.localFile.childImageSharp) {
      return (
        <BackgroundImage
          Tag="section"
          fluid={post.data.main_image.localFile.childImageSharp.fluid}
        ></BackgroundImage>
      )
    }
  }
}
export const BlogPostTeaser = ({ post }) => {
  const dates = new Date(post.data.release_date)
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(dates)
  return (
    <BlogPostTeaserStyle>
      <div className="blog-teaser-image-container">{returnImage(post)}</div>

      <Link className="blog-teaser-title" to={"/blog/" + post.uid}>
        {post.data.title.text && <h2>{post.data.title.text}</h2>}
      </Link>
      {/* {post.data.release_date && (
        <div className="release-date">{formattedDate}</div>
      )}
      {post.data.author && (
        <div className="blog-author">{post.data.author.text}</div>
      )} */}
      {post.data.teaser && (
        <div
          className="blog-teaser"
          dangerouslySetInnerHTML={{ __html: post.data.teaser.html }}
        />
      )}
      <Link className="cta-button" to={"/blog/" + post.uid}>
        Read more
      </Link>
    </BlogPostTeaserStyle>
  )
}

export default BlogPostTeaser
