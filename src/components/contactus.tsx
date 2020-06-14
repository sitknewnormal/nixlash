import React from 'react'
import { readableColor } from 'polished'
import styled from 'styled-components'
import { AnimatedBox, Button } from '../elements'
import { siteCellphone, siteEmail } from '../../config/index'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${(props) => (props.color === 'white' ? 'black' : props.color)};
  color: ${(props) => readableColor(props.color === 'white' ? 'black' : props.color)};
  magin: 0 auto;
`

const ContactUs = ({ color }) => {
  return (
    <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
      <h2>Find out more!</h2>
      <PButton m={2} color={color} py={4} px={8}>
        <b>
          <a style={{ textDecoration: 'none' }} href={`tel:${siteCellphone}`}>
            Call us now!
          </a>
        </b>
      </PButton>
      <PButton m={2} color={color} py={4} px={8}>
        <b>
          <a
            style={{ textDecoration: 'none' }}
            href={`mailto:${siteEmail}?subject=Service/Training quote`}
            target="_blank"
            rel="noopener noreferrer"
            title="Mail for a Training quote"
          >
            e-Mail us now!
          </a>
        </b>
      </PButton>
    </PBox>
  )
}

export default ContactUs
