import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageStyle = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
  }
`

export const ImageSlice = ({ slice }) => {
  return (
    <ImageStyle>
      <Img
        className="image-slice"
        fluid={slice.primary.image.localFile.childImageSharp.fluid}
      />
    </ImageStyle>
  )
}

export default ImageSlice
