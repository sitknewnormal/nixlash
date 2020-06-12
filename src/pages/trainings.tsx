/* eslint-disable prettier/prettier */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    trainings: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Trainings: React.FunctionComponent<PageProps> = ({ data: { trainings } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#000">
      <SEO title="Services | NIXLASH" />
      <Area style={pageAnimation}>
        {trainings.nodes.map((training) => (
          <GridItem key={training.slug} to={training.slug} aria-label={`View training "${training.title}"`}>
            <Img fluid={training.cover.childImageSharp.fluid} />
            <span>{training.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Trainings

export const query = graphql`
  query Trainings {
    trainings: allTrainingsYaml {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
