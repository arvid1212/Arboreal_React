import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Counter from '@/components/shared/Counter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TeamMembers from '@/components/shared/TeamMembers'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import { AboutFeaturesData } from '@/data/data'

export const metadata = {
  title: 'About',
}
const About = () => {
  return (
    <>
  <SecondaryNavbar/>
      <main>
      <TeamMembers/>
      </main>
      <Footer />
    </>
  )
}

export default About
