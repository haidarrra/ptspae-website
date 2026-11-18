import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import Strengths from '../components/sections/Strengths'
import Workflow from '../components/sections/Workflow'
import ProductsPreview from '../components/sections/ProductsPreview'
import Brands from '../components/sections/Brands'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import CTABanner from '../components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Strengths />
      <Workflow />
      <ProductsPreview />
      <Brands />
      <ProjectsPreview />
      <CTABanner />
    </>
  )
}
