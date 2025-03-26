import HeroSection from "@/app/components/our-story/HeroSection"
import Timeline from "@/app/components/our-story/Timeline"
import MissionVision from "@/app/components/our-story/MissionVision"
import Values from "@/app/components/our-story/Values"
import CTASection from "@/app/components/our-story/CTASection"

export default function OurStory() {
  return (
    <div className="flex flex-col">
       <HeroSection />
       <MissionVision />
      <Timeline />
     
      <Values />
      
      <CTASection />
    </div>
  )
}
