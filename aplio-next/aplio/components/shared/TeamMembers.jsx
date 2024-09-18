import Members from './Members'
import TeamBackground from './TeamBackground'

const ArborealTeam = () => {
  return (
    <section className="bg-white pb-[170px] pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25 max-md:pt-20">
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[475px] text-center">
    
          <h2>We are Arboreal</h2>
        </div>

        <div className="relative z-10">
          <TeamBackground />
          <Members />
          <p className="" >
          Arboreal wants to make it easy for every Forester and Forest owner to measure their forest with their smart phones. The AR-technology of today makes it easy and gives good accuracy without using paper and pen. The team of Arboreal consists of curious people with experience from both the Forestry and the new digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArborealTeam
