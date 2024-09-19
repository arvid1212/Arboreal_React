'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import analyticsDark2 from '@/public/images/integration/analytics-hero-dark-2.png'
import analyticsDark3 from '@/public/images/integration/analytics-hero-dark-3.png'
import analyticsDark from '@/public/images/integration/analytics-hero-dark.png'
import analyticsLight2 from '@/public/images/integration/analytics-hero-light-2.png'
import analyticsLight3 from '@/public/images/integration/analytics-hero-light-3.png'
import analyticsLight from '@/public/images/integration/analytics-hero-light.png'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const DataIntegration = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  const ref3 = useRef(null)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <section className="container mx-auto my-10 flex items-center justify-center gap-5 dark:bg-dark-300 lg:my-0">
      <motion.div initial="initial" ref={ref} animate={controlAnimation} variants={fadeUpAnimation}>
        <div className='PlotImg'>
        <a href="https://www.arboreal.se/en/arboreal-forest/">
        <h1 className='Plottxt' >Sample plot</h1>
        <Image
           src="/images/old site/frontpage/plot.jpg " 
           width={860} height={420}
          alt="big"
          className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
           />
</a>
</div>
        <Image
          src=""
          alt="Analytics-hero-light"
          className="hidden h-auto w-auto  rounded-medium dark:inline-block"
        />
      </motion.div>

      <div className="flex flex-col gap-y-5">
        <motion.figure initial="initial" ref={ref2} animate={controlAnimation2} variants={fadeUpAnimation}>
        <div className='HeightImg'>
         
          <a href="https://www.arboreal.se/en/arboreal-tree-height-2/">
          
          <h1 className='Heighttxt' >Tree height</h1>
          <Image
            src= "/images/old site/frontpage/heigt.jpg" width={480} height={300}
            alt="Analytics-hero-light2"
            className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
          />
          
           </a>
           </div>
          <Image
       
            src={analyticsDark2}
            alt="Analytics-hero-dark2"
            className="hidden h-auto w-auto  rounded-medium dark:inline-block"
          />
        </motion.figure>
        <motion.figure initial="initial" ref={ref3} animate={controlAnimation3} variants={fadeUpAnimation}>
        <div className='PrismImg'>
          <a href="https://www.arboreal.se/forest/">
          <h1 className='PrismTxt'> Prism (beta) </h1>
          <Image
          
            src="/images/old site/frontpage/prism.jpg" width={480} height ={300}
           
            alt="Analytics-hero-light3"
            className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
          />
        
          </a>
         
          </div>
          <Image
            src={analyticsDark3}
            alt="Analytics-hero-dark3"
            className="hidden h-auto w-auto  rounded-medium dark:inline-block"
          />
        </motion.figure>
      </div>
    </section>
  )
}

export default DataIntegration
