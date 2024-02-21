import React from "react"

interface HomeHerov2Props {
  backgroundImage: string
  title: string
  subtitle: string
}

const HomeHeroVersion2 = ({ backgroundImage, title, subtitle }: HomeHerov2Props) => {
  return (
    <div className={`h-full md:h-2/4 sm:h-2/4 w-full min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat flex flex-col justify-center`}>
      <div className="padding-container max-container md:padding-container md:max-container sm:padding-container sm:max-container">
        <div className="hero_v2_content">
          <div className="flex">
            <span className="line"></span>
            <h4 className="text-hotPink-10 uppercase">Donation</h4>
          </div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const HomeHeroV2 = () => {
  return (
    <section className="hero_v2">
      <HomeHeroVersion2 backgroundImage="bg-bg-img-4" title="We can think about the future, while remembering the past." subtitle="For every loved one we help put to rest, Poppy makes a donation with The Nature Conservancy to support reforestation and wildlife preservation in Colorado’s Northern Rockies." />
    </section>
  )
}

export default HomeHeroV2
