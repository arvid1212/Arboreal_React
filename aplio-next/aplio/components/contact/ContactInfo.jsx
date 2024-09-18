import Link from 'next/link'
import FadeUpAnimation from '../animations/FadeUpAnimation'

const ContactInfo = () => {
  return (
    <section className=" relative pb-150">
      <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container ">
        <div className="relative z-10">
          <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            <FadeUpAnimation className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className=" h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mb-6 inline-block">
                  <path
                    d="M24.1641 30.002H15.8359C14.4609 30.002 13.3359 28.8772 13.3359 27.5024V19.1681C13.3359 17.7934 14.4609 16.6686 15.8359 16.6686H24.1719C25.5469 16.6686 26.6719 17.7934 26.6719 19.1681V27.5024C26.6641 28.8772 25.5469 30.002 24.1641 30.002ZM15.8359 18.3324C15.375 18.3324 15 18.7073 15 19.1681V27.5024C15 27.9633 15.375 28.3382 15.8359 28.3382H24.1719C24.6328 28.3382 25.0078 27.9633 25.0078 27.5024V19.1681C25.0078 18.7073 24.6328 18.3324 24.1719 18.3324H15.8359ZM32.5 40H7.5C3.36719 40 0 36.6335 0 32.5015V15.9344C0 13.4427 1.23438 11.115 3.30469 9.71685L15.8047 1.281C18.3516 -0.437416 21.6484 -0.437416 24.1953 1.281L36.6953 9.71685C38.7656 11.115 40 13.4349 40 15.9344V32.4937C40 36.6335 36.6328 40 32.5 40ZM20 1.66374C18.8672 1.66374 17.7266 1.99961 16.7422 2.67135L4.24219 11.0994C2.63281 12.1851 1.67188 13.9895 1.67188 15.9344V32.4937C1.67188 35.7118 4.28906 38.3285 7.50781 38.3285H32.5078C35.7266 38.3285 38.3438 35.7118 38.3438 32.4937V15.9344C38.3438 13.9895 37.3828 12.1851 35.7734 11.0994L23.2734 2.66354C22.2734 1.99961 21.1328 1.66374 20 1.66374Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
                <h3 className="mb-2.5">Visit</h3>
                <p> Kaserngatan 3 4 tr, 903 47 Umeå Swe</p>
              </div>
            </FadeUpAnimation>
            <FadeUpAnimation className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark max-lg:p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mb-6 inline-block">
                  <path
                    d="M37.7031 15.4297L35 12.8281V5.83594C35 2.61719 32.3828 0 29.1641 0H10.8359C7.61719 0 5 2.61719 5 5.83594V12.8281L2.29688 15.4375C0.835937 16.8438 0 18.8047 0 20.8359V32.5C0 36.6328 3.36719 40 7.5 40H32.5C36.6328 40 40 36.6328 40 32.5V20.8359C40 18.8047 39.1641 16.8438 37.7031 15.4297ZM36.5469 16.6328C36.7031 16.7812 36.8438 16.9375 36.9766 17.1016L35 19.0781V15.1328L36.5469 16.6328ZM6.66406 5.83594C6.66406 3.53906 8.53125 1.67188 10.8281 1.67188H29.1641C31.4609 1.67188 33.3281 3.53906 33.3281 5.83594V20.75L24.125 29.9609C21.9219 32.1641 18.0781 32.1641 15.875 29.9609L6.66406 20.75V5.83594ZM3.45312 16.6328L5 15.1406V19.0859L3.01562 17.1016C3.15625 16.9375 3.29688 16.7812 3.45312 16.6328ZM38.3359 32.5C38.3359 35.7188 35.7188 38.3359 32.5 38.3359H7.5C4.28125 38.3359 1.66406 35.7188 1.66406 32.5V20.8359C1.66406 20.0547 1.82031 19.2812 2.125 18.5703L14.6953 31.1406C16.1094 32.5547 17.9922 33.3359 20 33.3359C22.0078 33.3359 23.8828 32.5547 25.3047 31.1406L37.875 18.5703C38.1719 19.2812 38.3359 20.0547 38.3359 20.8359V32.5ZM11.6641 9.16406C11.6641 8.70312 12.0391 8.32812 12.5 8.32812H27.5C27.9609 8.32812 28.3359 8.70312 28.3359 9.16406C28.3359 9.625 27.9609 10 27.5 10H12.5C12.0391 10 11.6641 9.625 11.6641 9.16406ZM11.6641 15.8359C11.6641 15.375 12.0391 15 12.5 15H24.1641C24.625 15 25 15.375 25 15.8359C25 16.2969 24.625 16.6719 24.1641 16.6719H12.5C12.0391 16.6641 11.6641 16.2969 11.6641 15.8359Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
                <h3 className="mb-2.5">Email Us</h3>
                <Link href="support@arboreal.se"> support@arboreal.se </Link>
              </div>
            </FadeUpAnimation>
            <FadeUpAnimation className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className=" h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark">
              
                <h3 className="mb-2.5">Read more</h3>
                <Link href="https://www.arboreal.se/en/">Old site</Link>
              </div>
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
