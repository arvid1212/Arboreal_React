import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import Link from 'next/link'

export const metadata = {
  title: 'LogIn Page',
}

const Login = () => {
  return (
    <>
      <PrimaryNavbar/>
     
     <a button="Login" href="http://https://www.arboreal.se/forest/">login </a>
     
    </>
  )
}

export default Login
