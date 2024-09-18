import { HeroDarkShapeSVG, HeroLightShapeSVG } from '@/data/svgImages'
import FadeUpAnimation from '../animations/FadeUpAnimation'



const Hero = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden  pb-20 pt-[230px] dark:bg-dark-300 max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <div className="to{-48.41%} absolute left-0 top-0 h-full max-h-[400px] w-full bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-[#F3FDD9] from-[-2.27%] to-[#F3FDD9]/10 dark:hidden"></div>

      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 max-lg:hidden">
        <HeroLightShapeSVG />
      </div>
     
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <HeroDarkShapeSVG />
      </div>
      <FadeUpAnimation className="container">
        
        <div className= "Header-Container">
        <div className="relative z-10 text-center ">
        <img className="bimg" src="images/hero/unnamed.jpg" alt="" srcset="" />
          <h1 className="Headertxt">
            MESUARE THE FOREST <br /> with your phone
          </h1>
        </div>
       
        </div>
      </FadeUpAnimation>
    </section>
  )
}

export default Hero
