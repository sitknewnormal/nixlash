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

const Policy = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={colour}>
      <SEO title="Policy | NIXLASH" desc="Hi. I'm NIXLASH! You can visit my website for detailed eyelash services and trainnnings." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Studio Policy</h1>
        <h2>COVID-19 PROCEDURE</h2>
        <p>
          An online pre-screening questionnaire is required 48 hours prior appointment.
        </p>
        <p>
          Please arrive Solo.
        </p>
        <p>
          Wash and sanitize your hands upon arrival.
        </p>
        <p>
          You may use our UV sterilizer Wand to disinfect any personal belongings.
        </p>
        <p>
          We have a limited supply of UV Sterilizer Wands for sale.
        </p>
        <p>
          We ask that you bring your own mask, however, we will be providing extra masks in case!
        </p>
        <h3>Deposits</h3>
        <p>
          A $25 deposit is required to secure a lash service appointment.
        </p>
        <p>
          All Deposits are non-refundable, however they are transferable to another appointment service.
        </p>
        <h3>Arrival</h3>
        <p>
          Please arrive without any makeup, debris or oil on the lashes. We recommend you to arrive 10 minutes early for a complimentary lash cleansing service.
        </p>
        <h3>Late Appointments</h3>
        <p>
          If you arrive late over 15 minutes, we have the right to automatically cancel your appointment.
        </p>
        <h3>Reschedule</h3>
        <p>
          To reschedule your appointment without losing your deposit, please notify us within a minimum of 48 hours.
        </p>
        <h3>Cancellation Fee</h3>
        <p>
          Cancelling your appointment within less than 48 hours will result in a  $20 Cancellation Fee (applied to your next appointment).
        </p>
        <h3>No Show</h3>
        <p>
          If you cannot make your appointment, we ask that you let us know! 
        </p>
        <p>
          No-Show appointments will result in a No Show Fee of $20 before booking future appointments.
        </p>
        <h3>Payment</h3>
        <p>
          We currently accept cash payments and E-transfer (Which includes HST).
        </p>
        <h3>Guests</h3>
        <p>
          Please arrive solo! 
        </p>
        <p>
          We normally allow guests to come to hang out in our waiting room, but due to the recent impact of Covid-19, we will not be allowing additional guests until further notice. 
        </p>
        <h3>Illness & Emergency</h3>
        <p>
          If you display any sick symptoms such as cough, fever, headache, conjunctivitis, sore throat and etc., we have the right to cancel your appointment.
        </p>
        <p>
          In the case that there is an emergency, we will always understand! Please notify us as soon as possible so that we can cancel and reschedule your appointment.
        </p>
        <h3>72-hour policy</h3>
        <p>
          We pride ourselves on creating long-lasting, full coverage sets. If you are experiencing any issues with your eyelash extensions post-appointment, please inform us within 72 hours so that we can make adjustments!
        </p>
        <h3>Foreign Fills</h3>
        <p>
          As master lash artists, we want to create beautiful long-lasting sets. 
        </p>
        <p>
          Foreign fills require your lash artist to work on top of another artist?s canvas which may require lash corrections or a complete removal + full set of fresh lashes.
        </p>
        <p>
          However, we <b>do</b> provide refills on top of other artist sets only if:
        </p>
        <ol>
            <li>The previous lash artist properly applied for eyelash extensions on the client.</li>
            <li>The previous set of lash extensions hold the correct width and length. (This means no signs of itching, heaviness, or uncomfortability) </li>
            <li>Clients are required to pay an additional Foreign Fill fee of $20.</li>
        </ol>
        <p>
          If the client?s previous lash set was improperly applied, the client will be required to pay for a removal + full set.
        </p>

      </AnimatedBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <ContactUs color={colour} />
      </PBox>
    </Layout>
  )
}

export default Policy
