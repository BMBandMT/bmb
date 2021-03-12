import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { DefaultPlayer as Video } from "react-html5video"
import "react-html5video/dist/styles.css"
import GrowVideo from "../videos/JustCoffeeAnimation.webm"
import { isSafari } from "react-device-detect"
import BeanImage from "../images/beanvector.png"
import CannabisImage from "../images/cannabisvector.png"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const FadeIn = ({ duration = 800, delay = 1000, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const HeroStyle = styled.div`
  #hero {
    transition: 0.5s;
    min-height: 800px;
    color: white;
    // display: flex;
    // align-items: flex-end;
    // justify-content: center;
    padding-bottom: 40px;
    padding-top: 50px;
    * {
      color: white;
    }
    @media (max-width: ${variable.mobileWidth}) {
      min-height: 650px;
    }
    .video-container {
      max-height: 435px;
      overflow: visible;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
    .hero-video {
      background-color: transparent;
      max-width: 78%;
      margin: 0 auto;
      pointer-events: none;
      @media (max-width: ${variable.mobileWidth}) {
        max-width: 100%;
      }
    }
    .safari-container {
      display: none;
    }
    &.safari {
      .video-container {
        margin-bottom: 60px;
        max-height: 100%;
      }
      .video-play-container {
        display: none;
      }
      .hero-video {
        display: none;
      }
      .safari-container {
        display: block;
        max-width: 770px;
        margin: 0 auto;
        padding: 0px 20px;
        .safari-uppeer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
          }
          .cannabis-one {
            position: relative;
            top: 40px;
            width: calc(50% - 110px);
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              top: unset;
            }
            .safari-header {
              &:after {
                content: "";
                width: 100%;
                height: 2px;
                background-color: white;
                display: block;
              }
              margin-bottom: 5px;
            }
            .safari-copy {
              padding-right: 20px;
            }
          }
          .cannabis-two {
            width: 220px;
            img {
              width: 100%;
              height: auto;
            }
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              margin: 40px 0px;
            }
          }
          .cannabis-three {
            position: relative;
            top: -20px;
            padding-left: 40px;
            width: calc(50% - 100px);
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              top: unset;
              padding: 0px;
            }
            .safari-header {
              margin-bottom: 5px;
              &:after {
                content: "";
                width: 110px;
                height: 2px;
                background-color: white;
                display: block;
                position: relative;
                right: 64px;
                @media (max-width: ${variable.mobileWidth}) {
                  width: 100%;
                  right: auto;
                }
              }
            }
          }
          .safari-copy {
            font-size: 15px;
            font-weight: 300;
          }
          .safari-header {
            font-size: 28px;
            font-weight: bold;
          }
        }
        .safari-lower {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: column;
            max-width: 300px;
            margin: 30px auto 0px auto;
          }
          .cannabis-one {
            position: relative;
            top: 40px;
            width: calc(50% - 110px);
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              top: unset;
            }
            .safari-header {
              &:after {
                content: "";
                width: 100%;
                height: 2px;
                background-color: white;
                display: block;
              }
              margin-bottom: 5px;
            }
            .safari-copy {
              padding-right: 20px;
              @media (max-width: ${variable.mobileWidth}) {
                padding: 0px;
              }
            }
          }
          .cannabis-two {
            width: 180px;
            img {
              width: 100%;
              height: auto;
            }
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              margin: 40px 0px;
              text-align: center;
              img {
                max-width: 250px;
              }
            }
          }
          .cannabis-three {
            position: relative;
            top: -20px;
            padding-left: 40px;
            width: calc(50% - 105px);
            @media (max-width: ${variable.mobileWidth}) {
              width: 100%;
              top: unset;
              padding: 0px;
            }
            .safari-header {
              margin-bottom: 5px;
              &:after {
                content: "";
                width: 120px;
                height: 2px;
                background-color: white;
                display: block;
                position: relative;
                right: 53px;
                @media (max-width: ${variable.mobileWidth}) {
                  right: auto;
                  width: 100%;
                }
              }
            }
          }
          .safari-copy {
            font-size: 15px;
            font-weight: 300;
          }
          .safari-header {
            font-size: 28px;
            font-weight: bold;
          }
        }
      }
    }
    .hero-content {
      max-width: 550px;
      text-align: center;
      margin: 0 auto;
      .video-play-container {
        font-size: 15px;
        height: 20px;
        .video-play {
          display: none;
        }
        .video-ended {
          display: block;
          cursor: pointer;
        }
      }
      h2 {
        font-size: 35px;
        font-weight: 500;
        line-height: 35px;
        font-family: "Roboto";
      }
      .hero-link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
        }
        .herolink {
          width: 150px;
          a {
            color: white;
            font-size: 15px;
            line-height: 20px;
            font-weight: 400;
          }
          &.heromt {
            text-align: right;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
              margin-bottom: 20px;
            }
          }
          &.herobmb {
            text-align: left;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        }
        .hero-start {
          border: 1px solid #ffffff;
          padding: 10px 25px;
          border-radius: 5px;
          color: white;
          font-size: 20px;
          line-height: 26px;
          font-weight: 500;
          margin: 0px 20px;
          display: inline-block;
          width: auto;
          &:hover {
            color: black;
            background-color: white;
          }
        }
      }
      .hero-scroll {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .down-arrow {
          // margin-top: 25px;
          display: none;
          .gatsby-image-wrapper {
            height: 50px !important;
            width: 16px !important;
          }
        }
      }
    }
  }
  .hero-container {
    position: relative;
  }
  .left-scroll {
    position: absolute;
    bottom: 100px;
    left: 100px;
    height: 100px;
    display: flex;
    width: 75px;
    align-items: center;
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
    @media (max-width: ${variable.mobileWidth}) {
      left: 40px;
    }
    .gatsby-image-wrapper {
      height: 90px !important;
      width: 16px !important;
    }
    img {
      height: 100%;
      width: auto;
    }
    .scroll {
      transform: rotate(-90deg);
      height: 10px;
      position: relative;
      left: 10px;
      top: -5px;
      font-weight: 300;
      font-size: 15px;
    }
  }
  .fadein {
    > div {
      transition-duration: 1s !important;
    }
  }
`

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoPlay: "video-ended",
    }
  }
  componentDidMount() {
    var vid = document.getElementById("myVideo")
    setTimeout(() => vid.play(), 4000)
  }
  changeThis() {
    this.setState({ videoPlay: "video-ended" })
  }
  playThis() {
    this.setState({ videoPlay: "video-play" })
    var vid = document.getElementById("myVideo")
    vid.play()
  }

  render() {
    console.log(isSafari)
    return (
      <HeroStyle>
        <BackgroundImage
          id="hero"
          className={isSafari ? "safari" : "no-safari"}
          fluid={this.props.data.heroBg.childImageSharp.fluid}
        >
          <div className="video-container">
            <div className="safari-container">
              <div className="safari-lower">
                <div className="cannabis-one">
                  <FadeIn delay={7000}>
                    <div className="safari-header">2.5x</div>
                    <div className="safari-copy">
                      historic coffee yields through commercial investment in
                      new estates.
                    </div>
                  </FadeIn>
                </div>
                <div className="cannabis-two">
                  <FadeIn delay={5000}>
                    <img src={BeanImage} />
                  </FadeIn>
                </div>
                <div className="cannabis-three">
                  <FadeIn delay={6000}>
                    <div className="safari-header">$120</div>
                    <div className="safari-copy">
                      per pound at market. Jamaican Blue Mountain coffee is
                      among the world's most valuable.
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
            <video
              id="myVideo"
              className="hero-video"
              muted
              onEnded={this.changeThis.bind(this)}
            >
              <source src={GrowVideo} type="video/webm" />
            </video>
          </div>
          <Container className="hero-container">
            <div className="hero-content">
              <div className="video-play-container">
                <FadeIn delay={26500}>
                  <div
                    className={this.state.videoPlay}
                    onClick={this.playThis.bind(this)}
                  >
                    Play Again
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={2000}>
                <h2>
                  Invest in Jamaican Blue Mountain Coffee with Blue Mountain
                  Best
                </h2>
              </FadeIn>
              <div className="hero-link-container">
                <FadeIn delay={4000}>
                  <AnchorLink className="hero-start" href="#lpfooter">
                    Get Started
                  </AnchorLink>
                </FadeIn>
              </div>
              <FadeIn delay={5000}>
                <div className="hero-scroll">
                  <div>Scroll to Learn More</div>
                  <div className="down-arrow">
                    <Img
                      fixed={this.props.data.heroArrow.childImageSharp.fixed}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
          <FadeIn>
            <div className="left-scroll">
              <div className="scroll">Scroll</div>
              <Img fixed={this.props.data.leftArrow.childImageSharp.fixed} />
            </div>
          </FadeIn>
        </BackgroundImage>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HerosOppQuery {
        heroBg: file(relativePath: { eq: "herobg.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroArrow: file(relativePath: { eq: "arrow-down-center.png" }) {
          childImageSharp {
            fixed(width: 142, height: 396) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        leftArrow: file(relativePath: { eq: "leftdownarrow.png" }) {
          childImageSharp {
            fixed(width: 142, height: 690) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        heroVideo: file(relativePath: { eq: "hero.mov" }) {
          absolutePath
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
