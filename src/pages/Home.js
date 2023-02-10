import React from 'react'
import styled from 'styled-components'
import Footer from '../components/FooterB/Footer'
import AboutSection from '../components/Home/AboutSection'
import ContactBanner from '../components/Home/ContactBanner'
import HelloHero from '../components/Home/HelloHero'
import ProjectsSection from '../components/Home/ProjectsSection'
import ServicesSection from '../components/Home/ServicesSection'
// import SplineVIew from '../D3Elem/SplineVIew'

const HomeStyle = styled.div`
  margin-top: 10rem;
  color: var(--white);
`
export default function Home() {
  return (
    <HomeStyle>
      <div>
        {/* <SplineVIew /> */}
        <HelloHero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactBanner />

        <Footer />
      </div>
    </HomeStyle>
  )
}
