import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import ContactForm from '@/components/shared/ContactForm'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Faq from '@/components/shared/Faq'
export const metadata = {
  title: 'Contact',
}

const page = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero/>
        <section>
        <Faq/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page
