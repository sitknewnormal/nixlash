/* eslint-disable prettier/prettier */
import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const FAQ = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="FAQ | NIXLASH" desc="Hi. I'm NIXLASH! You can visit my website for detailed services." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Frequently Asked Questions</h1>
        <p>
          Before selecting a lash artist or trainer, we recommend you do your research about lash extension beforehand. Here are some frequently asked questions that we love to address.
        </p>
        <h5>
          <em>What are eyelash extensions?</em>
        </h5>
        <p>
          Eyelash extensions are made to look identical to human lashes. Using a state-of the ?art application technique, one lash at a time is applied onto the existing lash. The eyelash extension simply transforms your natural lashes into lush, beautiful, longer lashes.  Eyelash extensions are for professional application only, the entire lash procedure is very comfortable and relaxing. They are weightless and you feel nothing on your lashes. They are water-proof; you can shower, exercise and even sleep with them on.  With proper care and depending on your lash cycle, these lash extensions can last up to 2 months or longer.
        </p>
        <h5>
          <em>What is the difference between eyelash extension and traditional false lashes?</em>
        </h5>
        <p>
          The major differences are the following: Adhesive formula, lash type, application technique, lash appearance and lasting duration. Traditional false lashes are usually made with a trip or with multiple lashes knotted together and are applied directly on the eyelid using adhesive formulas that dry hard on the eyelid and lashes. They often cause discomfort to the eyes and may cause your natural lashes to fall out prematurely. Traditional false lashes usually last only a few days to a week, often looking unnatural and feeling heavy on your eyes.
        </p>
        <p>
          Eyelash extensions are made to look identical to human lashes and are crimp resistant, the adhesive is formulated or a permanent bond and dries soft on lashes. The polypeptide bond allows lashes to remain flexible and bouncy. Each extension is applied directly to the individual lash, one lash at a time vie a state-of the art-technique. They are weightless, very comfortable on the eyes, and will not prematurely cause the natural lashes to fall off. Eyelash extensions look so natural and have the incredible bonding power that can last up to 2 months or longer depending on care and maintenance.
        </p>
        <h5>
          <em>How long does it last?</em>
        </h5>
        <p>
          With proper care and maintenance, they will last on average up to 4-8 weeks or even longer (if applied correctly) depending on how well the clients take care of them also depending on their own lashes natural growth cycle.  Some experience a much better retention rate while others fair very poorly. Factors include the strength and texture (natural length and volume of the natural lashes) of natural lashes, lifestyle, natural lash cycle and the way they care for the eyelash extensions.
        </p>
        <p>
          In order to keep the lash extensions full and looking great, a touch up/refill is recommended every 2-4 weeks (3 weeks on average) to replace any extensions that may have fallen off.
        </p>
        <h5>
          <em>What are eyelash extensions made of?</em>
        </h5>
        <p>
          Eyelash extensions are crafted from synthetic polyester. Synthetic lashes respond better to wear and tear than other materials. They are made to replicate natural human lash, virtually weightless. In addition, synthetic have the least possible change of allergic reactions with human skin. Testing has shown that there are higher percentages of people who will have adverse reactions to contact with lash extensions created from animal hairs, such as mink.
        </p>
        <h5>
          <em>What are eyelash extensions made of?</em>
        </h5>
        <p>
          Eyelash extensions are crafted from synthetic polyester. Synthetic lashes respond better to wear and tear than other materials. They are made to replicate natural human lash, virtually weightless. In addition, synthetic have the least possible change of allergic reactions with human skin. Testing has shown that there are higher percentages of people who will have adverse reactions to contact with lash extensions created from animal hairs, such as mink.
        </p>
        <h5>
          <em>How do they feel?</em>
        </h5>
        <p>
          With proper application, Eyelash Extensions look and feel completely real. There should be no discomfort or pain during and after the application process. Eyelash Extensions are designed to be indistinguishable in size and weight to human lashes. They are flexible yet crimp-resistant, and they move with your natural lashes. Lash is an exact replica of an eyelash, it weighs about as much as a natural lash: practically nothing.
        </p>
        <h5>
          <em>Do eyelash extensions damage natural lashes?</em>
        </h5>
        <div>
          <p>
            Excellent question and one that everyone should be asking!  Eyelash extensions do not cause damage to or loss of the natural lashes, if applied safely and correctly. It is highly recommended that the clients research and have their eyelash extensions applied by a certified professional eyelash extension technician and are trained in proper safety of the technique.  The outcome and quality of the lash extensions will rely heavily upon whom they choose to do their application. Situations where damage can be occur to the natural lashes are typically caused by one of the following:
          </p>
          <ul>
            <li>Unqualified professionals applying eyelash extensions. Only under the supervision of a well-qualified trainer.  Can a student learn how to properly position their hands, pick up a lash extension, isolate a single natural lash and apply the lash extension  safely and beautifully. Trained lash artists often see the work of unqualified professionals first hand and must repair the damage that has been done to the client.</li>
            <li>Cheap Work.  Everyone wants a discount, and yes, you can find lashes at inexpensive prices. At cheap prices, technicians need to speed through the application process to maximize their time. This leads to short cuts and poor quality of work.</li>
            <li>Flares, clusters, strip lashes applied as shortcuts.  Flares, clusters and strips consist of a minimum of 3-8 blunt-end bundled lashes, often with a knot at the end.  These types of lash enhancements are designed to be applied using a temporary lash adhesive for short term wear.  These bundled lashes are far too heavy for a simple natural lash to support.  If applied to one natural lash, they can break the natural lash and inhibit future re-growth.   Alternatively, if they are applied to multiple natural lashes to properly support their heavy weight, multiple natural lashes will be adhered together.  Since natural lashes grow at different rates the flares will cause faster growing natural lashes to prematurely pull out slower growing lashes from the root because they are bonded together.  This can result in lash damage and baldness.</li>
            <li>Careless adhesion. This lead to 3-4 natural lashes being clumped together. Again, this comes down to improper training and quality of materials. Lashes applied properly should be attached one-by-one. One small single strand extension is applied to one natural lash.  If several natural lashes are adhered together because the technician has not been trained to isolate a single natural lash, or is being too careless or too quick to do so, it can cause pain, and in the end, damage to natural lashes.</li>
            <li>Inappropriate sized lashes. Prior to applying lash extensions, always take into consideration your client?s natural lash health.  Lashes that are too heavy in diameter and/or length can cause the natural lash to shed prematurely, causing a condition known as traction apopecia (pulling force being applied to the hair).</li>
          </ul>
        </div>
        <h5>
          <em>Is there anyone who cannot or should not have eyelash extension applied?</em>
        </h5>
        <div>
          <p>
            Because Eye Lash Extensions are applied to existing natural lash and individual must have some natural lashes for the procedure.  Eye Lash Extensions should not and in many cases cannot be applied to clients who have alopecia, are undergoing chemotherapy (individual cannot get eyelash extensions if they had chemotherapy in the last 6 months), have pre-existing eyelid or eye conditions such as blepharitis and ocular rosacea, or those who suffer from Trihotillomania (an impulse disorder characterized by the urge to pull eyelashes and other hair out).  It also may not be suitable for people who are very rough with themselves and do not want to follow after care instructions and cannot control rubbing their eyes.
          </p>
          <p>
            Other reasons why you cannot get eyelash extensions:
          </p>
          <ul>
            <li>have adhesive allergies.</li>
            <li>had Lasik has to wait at least 4 weeks and seek their doctor?s approval prior to getting extensions.</li>
            <li>had an eyelift surgery must wait 4 to 6 months after the operation and also gain their doctor?s approval.</li>
            <li>are on Thyroid Medication you may find keeping the lashes beyond 2 weeks a challenge.</li>
            <li>has a medical condition related to their eyes, sight or eye area should really consult their doctor first.</li>
          </ul>
        </div>
        <h5>
          <em>Can I wear mascara with my eyelash extensions?</em>
        </h5>
        <p>
          Eyelash extensions naturally darken the lashes and mascara will not be necessary. If desired, a <u>water-based</u> mascara may be used on the tip of the lashes for enhancement. Never use waterproof mascara. Rubbing directly on the extensions or using mascara remover will weaken the bonding. Water-based mascara should come off with just warm water while washing your face or showering.
        </p>
        <h5>
          <em>Can eyelash extensions be removed?</em>
        </h5>
        <p>
          Yes, at any time for any reason. As the natural lashes cycle out and shed, eyelash extensions will shed with them. However, if necessary, eyelash extensions can be easily removed by a professional technician using a specially formulated adhesive remover.   The removal process normally takes approximately 15 to 30 minutes for a full set.  Never try to remove lash extensions on your own. Damage can be caused by pulling the extensions off with the natural lash, removing the natural lash before it is ready to shed.
        </p>
        <h5>
          <em>Is it safe if I have very sensitive eyes or allergy reactions?</em>
        </h5>
        <p>
          Even with the most safe and high quality brand in the industry, some people who have very sensitive eyes or allergy problems would react to the eyelash extensions glue.  There is a very small chance of an allergic reason (less than 1%).  The common symptom is puffiness, swelling and itchy over the eyelid within 24-48 hours, and in this case, they should contact the facility where the eyelash extension was applied for removal.  Once removed, the swelling will dissipate within a few days, and the eyes will be back to normal.  However, the allergy case is very rare and majority people have no problem, but this should openly be informed to all clients.
        </p>
        <p>
          Although many adhesives are developed to be safe for use the skin, eyelash extensions are never applied to the skin, therefore, allergic reactions due to contact with our adhesives are rare.  Individuals with allergies to other cosmetics or fragrances may experience some sensitivity to ingredients in some of the other materials used to apply eyelash extensions such as lint-free undereye gel patch. If necessary, a medical tape can be applied under the eyes during the procedure instead.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default FAQ
