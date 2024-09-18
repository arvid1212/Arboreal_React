import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'

import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
export const metadata = {
  title: 'Blog',
}

const Blog = () => {
  const blogs = getMarkDownData('data/blogs')
  return (
    <>
     <PrimaryNavbar/>
      <main>
        <PageHero subtitle="" title="News from Arboreal" />
        <FeatureBlog featureBlog={blogs} />
        <RecentNews blogItemData={blogs} />
        
      </main>
      <Footer />
    </>
  )
}

export default Blog
