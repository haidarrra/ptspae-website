import HeroSlideshow from '../components/sections/HeroSlideshow'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import Strengths from '../components/sections/Strengths'
import Workflow from '../components/sections/Workflow'
import Brands from '../components/sections/Brands'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import CTABanner from '../components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutPreview />
      <ServicesPreview />
      <Strengths />
      <Workflow />
      <Brands />
      <ProjectsPreview />
      <CTABanner />
    </>
  )
}
