import React from 'react'
import Skogc from '@/components/products/threeheight/skog/skog'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Footer from '@/components/footer/Footer'
import PageHero from '@/components/shared/PageHero'
function skog() {
  return (
    <>
   
    

    <PrimaryNavbar/>
<PageHero/>
    <main>
    <Skogc/>
    </main>
    <footer>
    <Footer/>
    </footer>
    </>
  )
}

export default skog