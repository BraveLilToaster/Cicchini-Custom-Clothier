import React from 'react'
import styled from 'styled-components'
import Hero from '../styles/Hero'
import ResponsivePlayer from '../components/ResponsivePlayer'
import Container from '../styles/Container'
import Section from '../styles/Section'
import Slider from '../components/Slider'
import {
  Display4,
  Display2,
  Display1,
  Headline,
  Body1,
} from '../styles/Typography'
import { getCloudinaryUrl, transformations } from '../constants/cloudinary_config'

const Video = {
  url: `https://res.cloudinary.com/cicchini/video/upload/Video/Cicchini%20Video.mp4`,
  poster: `${getCloudinaryUrl()}Video/video_poster.png`
}

const slider = [
  {
    header: 'Custom Suits',
    subheader: 'We create a suit that fits you and no one else.',
    backgroundImage: `${getCloudinaryUrl(transformations.max_width_1280)}Hero%20Slider/Cicchini_2018_Lookbook_Photos_BCP-67.jpg`,
    imageAlign: 'top',
    cta_link: '',
    cta_text: '',
  },
  {
    header: 'Custom Shirts',
    subheader: 'You wear them everyday. Make sure they fit.',
    backgroundImage: `${getCloudinaryUrl(transformations.max_width_1280)}Hero%20Slider/Cicchini_2018_Lookbook_Photos_BCP-255.jpg`,
    imageAlign: 'top',
    cta_link: '',
    cta_text: '',
  },
  {
    header: 'Shoe Selections',
    subheader: 'We offer a vast array of styles and brands.',
    backgroundImage: `${getCloudinaryUrl(transformations.max_width_1280)}Hero%20Slider/Cicchini_Custom_Clothier_Photos_BCP_2016-98.jpg`,
    imageAlign: 'center',
    cta_link: '',
    cta_text: '',
  },
  {
    header: 'Casual Wear',
    subheader: 'A variety of upscale clothing to fit your lifestyle.',
    backgroundImage: `${getCloudinaryUrl(transformations.max_width_1280)}Hero%20Slider/Cicchini_Custom_Clothier_Photos_BCP_2016-29.jpg`,
    imageAlign: 'center',
    cta_link: '',
    cta_text: '',
  },
]

const index = props => {
  return (
    <Container>
      <Slider
        autoplay
        autoplaySpeed={3500}
        dots
        slidesToShow={1}
        slidesToScroll={1}
      >
        {slider.map((slide, idx) => (
          <HeroSlide
            backgroundImage={slide.backgroundImage}
            imageAlign={slide.imageAlign}
            flex
            justifyContent={'center'}
          >
            <Section
              flex
              alignItems={'center'}
            >
              <HeroHeader children={slide.header} align={'center'} />
              <HeroSubheader children={slide.subheader} align={'center'} />
            </Section>
          </HeroSlide>
        ))}
      </Slider>
      <Section margin={'2rem auto'} maxWidth={940}>
        <Display2
          align="center"
          margin={'0 0 2rem'}
          children={`
            Watch the Video
          `}
        />
        <ResponsivePlayer
          url={Video.url}
          config={{
            file: {
              attributes: {
                controls: 1,
                poster: Video.poster
              },
            }
          }}
        />
      </Section>
      <Section margin={'2rem auto'} maxWidth={940}>
        <Display2
          align="center"
          children={`
            The Cicchini Story
          `}
        />
        <Body1 children={`
          Paul Cicchini arrived in Detroit, MI on the last ship to sail out of the Abruzzi region of Italy in 1940, just before World War II. He immediately began working for his father in a tailor shop, where he would began to master his craft. In 1949 Cicchini opened up his own shop, Cicchini Custom Tailoring on West Adams St, in the Kales Building, right in the heart of Detroit City. Before opening the doors to the new shop, Cicchini served proudly in the United States Army during the second World War. Fast forward forty successful years to 1989, when current owner and proprietor Rick DePanicis, purchased Cicchini Custom Clothier. Cicchini still remains hard at work everyday in the shop, that is now located in a 6,000 square foot corner plot of Downtown Birmingham, MI.
          `}
        />
        <Body1 children={`
          Cicchini’s sterling reputation would soon spread outside of Michigan and into the rest of the United States. His clientele would rapidly grow to all different kinds of professionals who realized the supreme benefits of wearing a well-made suit. "People would stop and ask our clients, ‘Who made your suit?' and before long, we had built a highly successful business," says Cicchini. This reputation grew so strong that Cicchini earned the Lifetime Achievement Award from the International Custom Tailors and Designers Association. Cicchini would be one of only five people to receive this award in its 125 illustrious year history.
          `}
        />
        <Body1 children={`
          This talent caught the eye of experienced custom clothier, Rick Depancis, who purchased the company in 1989. DePanicis much like Cicchini began training immediately in styling, measuring, and construction. With an ambition to continue to grow, DePanicis, has added a second tailor shop, as well as, a retail section for high end clothing, shoes, and accessories. The Cicchini reputation continues its reputation to this day with a staff dedicated to dressing businessmen and women, celebrities, athletes, and any other clients who realize the importance of well developed wardrobe.
          `}
        />
      </Section>
    </Container>
  )
}

const HeroSlide = Hero.extend`
  outline: none;
  display: flex !important;
`

const HeroHeader = Display4.extend`
  color: ${props => props.theme.text.light.primary};
  text-shadow: 2px 3px 7px #000;
`

const HeroSubheader = Display1.extend`
  color: ${props => props.theme.text.light.primary};
  text-shadow: 2px 3px 7px #000;
`

export default index
