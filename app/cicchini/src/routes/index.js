import React from 'react'
import styled from 'styled-components'
import Hero from '../styles/Hero'
import Container from '../styles/Container'
import Section from '../styles/Section'

const index = props => {
  return (
    <Container>
      <Hero background={'blue'}>
        <Section>
          <p>Home</p>
        </Section>
      </Hero>
      <Section>
        <h1>
          The Cicchini Story
        </h1>
        <p>
          Paul Cicchini arrived in Detroit, MI on the last ship to sail out of the Abruzzi region of Italy in 1940, just before World War II. He immediately began working for his father in a tailor shop, where he would began to master his craft. In 1949 Cicchini opened up his own shop, Cicchini Custom Tailoring on West Adams St, in the Kales Building, right in the heart of Detroit City. Before opening the doors to the new shop, Cicchini served proudly in the United States Army during the second World War. Fast forward forty successful years to 1989, when current owner and proprietor Rick DePanicis, purchased Cicchini Custom Clothier. Cicchini still remains hard at work everyday in the shop, that is now located in a 6,000 square foot corner plot of Downtown Birmingham, MI.
        </p>
        <p>
          Cicchini’s sterling reputation would soon spread outside of Michigan and into the rest of the United States. His clientele would rapidly grow to all different kinds of professionals who realized the supreme benefits of wearing a well-made suit. "People would stop and ask our clients, ‘Who made your suit?' and before long, we had built a highly successful business," says Cicchini. This reputation grew so strong that Cicchini earned the Lifetime Achievement Award from the International Custom Tailors and Designers Association. Cicchini would be one of only five people to receive this award in its 125 illustrious year history.
        </p>
        <p>
          This talent caught the eye of experienced custom clothier, Rick Depancis, who purchased the company in 1989. DePanicis much like Cicchini began training immediately in styling, measuring, and construction. With an ambition to continue to grow, DePanicis, has added a second tailor shop, as well as, a retail section for high end clothing, shoes, and accessories. The Cicchini reputation continues its reputation to this day with a staff dedicated to dressing businessmen and women, celebrities, athletes, and any other clients who realize the importance of well developed wardrobe.
        </p>
      </Section>
    </Container>
  )
}

export default index
