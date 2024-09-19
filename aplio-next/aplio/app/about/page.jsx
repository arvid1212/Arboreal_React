import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Counter from '@/components/shared/Counter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import TeamMembers from '@/components/shared/TeamMembers'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import { AboutFeaturesData } from '@/data/data'
import ContactInfo from '@/components/contact/ContactInfo'
import Faq from '@/components/shared/Faq'

export const metadata = {
  title: 'About',
}
const About = () => {
  return (
    <>
 <PrimaryNavbar/>
      <main>
      <TeamMembers/>
     
     
      </main>
      <div>

   
      <ContactInfo/>

      </div>
      <Footer />
    </>
  )
}

export default About
