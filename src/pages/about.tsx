import React from 'react'
import { config, useSpring } from 'react-spring'
import styled from 'styled-components'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import ContactUs from '../components/contactus'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`
const colour = '#b8adad'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={colour}>
      <SEO title="About | NIXLASH" desc="Hi. I'm NIXLASH! You can visit my website for detailed eyelash services and trainnnings." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm NIXLASH!</h1>
        <p>
          After 5 years of being in the Lash Industry and 3 lash certifications in (Classic, Classic Advanced and Volume/Mega Volume), Nicole has discovered her passion for lashing, and more importantly, spreading positive energy towards her clients and students. Being an artist, she enjoys the process behind creating a full set of lashes which is customized on each client. Every person's eyes are unique from shape, size and eye-colour, so working with different faces allows her to be creative since the goal is to enhance the look of your eyes! With years of experience in the ups and downs of owning a lash business, she now offers training to support other individuals who want to take the next step in their life and run their own businesses.
        </p>
        <p>
          We pride ourselves in offering a prestige service by creating an environment for clients to feel welcome, at peace and safe. She states that her favourite feeling is seeing how beautiful her clients feel at the end of their appointments and watching her students thrive in the beauty industry as well as in their own personal lives.
        </p>
        <h2>Training</h2>
        <p>
          There are many lash courses that are willing to certify students at any cost, even for students who have not fully acquired the lashing skill itself. We want our students to strive beyond this and to know their value as a lash artist, to be confident in themselves while being able to create beautiful, high-quality and safe sets that will help them run an attractive business in the long run. Every student is thoroughly assessed during training to make sure they are meeting the industry standard and guaranteed moral support post training, because we want our students to thrive!
        </p>
      </AnimatedBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <ContactUs color={colour} />
      </PBox>
    </Layout>
  )
}

export default About
