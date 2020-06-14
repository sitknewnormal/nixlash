import React from 'react'
import { graphql } from 'gatsby'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import ContactUs from '../components/contactus'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'
import Gallery from '../components/gallery'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${(props) => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[10]};

    @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
      margin-bottom: ${(props) => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${(props) => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${(props) => (props.color === 'white' ? 'black' : props.color)};
  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
`

type PageProps = {
  data: {
    training: {
      title_detail: string
      color: string
      category: string
      desc: string
      price_line1: string
      price_line2: string
      slug: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        id: string
        name: string
        publicURL: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
}

const Training: React.FunctionComponent<PageProps> = ({ data: { training, images } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={training.color}>
      <SEO
        pathname={training.slug}
        title={`${training.title_detail} | NIXLASH`}
        desc={training.desc}
        node={training.parent}
        banner={training.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{training.category}</Category>
        <animated.h1 style={titleAnimation}>{training.title_detail}</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: training.desc }} />
        </Description>
        <Description style={descAnimation}>
          <div style={{ fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: training.price_line1 }} />
        </Description>
        <Description style={descAnimation}>
          <div style={{ fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: training.price_line2 }} />
        </Description>
      </PBox>
      <Content bg={training.color} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <Gallery images={images.nodes.map(image => ({
                            ...image.childImageSharp,
                            id: image.id,
                            name: image.name,
                            publicURL: image.publicURL,
                          }))}
            />
          {/* {images.nodes.map((image) => (
            <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          ))} */}
        </PBox>
      </Content>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <ContactUs color={training.color} />
      </PBox>
    </Layout>
  )
}

export default Training

export const query = graphql`
  query TrainingTemplate($slug: String!, $images: String!) {
    training: trainingsYaml(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      price_line1
      price_line2
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }, sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`