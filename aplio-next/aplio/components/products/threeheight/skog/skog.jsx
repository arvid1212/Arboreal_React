import React from "react"
import Button from '@mui/material/Button';

import SecondaryNavbar from "@/components/navbar/SecondaryNavbar";

const Skogc=()=> {
  return (
    <>
       <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      </section>
    <main>
    <div className="forestdiv" ><h1>Skogc</h1>
     
     <card className="Card-Skog" > <a href="http://">Skog</a></card>
     <Button className="ForestBtn" a href="https://www.arboreal.se/arboreal-skog/
     ">Arboreal forest</Button>

    </div>

</main>
</>
  )
}

export default Skogc

