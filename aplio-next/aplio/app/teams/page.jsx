import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Counter from '@/components/shared/Counter'
import Faq from '@/components/shared/Faq'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import TestimonialSlider from '@/components/shared/TestimonialSlider'
import TeamMemberAnimation from '@/components/team/TeamMemberAnimation'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
export const metadata = {
  title: 'Our Teams',
}

const Teams = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="OUR TEAM"
          title="Our leading, strong and <br> creative team"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <section className="relative z-10 bg-white pb-[170px] dark:bg-dark-300 max-md:pb-25">
          <div className="absolute -top-[200px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container">
            <div className="relative z-10">
              <div className="absolute left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:top-0 max-md:hidden max-md:flex-col md:top-1/2">
                <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              </div>
              <TeamMemberAnimation />
            </div>
          </div>
        </section>
        <Counter />
        <TestimonialSlider className={'pt-150'} />
        <Faq />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Teams
