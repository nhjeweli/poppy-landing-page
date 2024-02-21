import Image from "next/image"
import Button from "./Button"

interface CampProps {
  backgroundImage: string
  title: string
  subtitle: string
}

const CtaParallax = ({ backgroundImage, title }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat bg-right-bottom sm:bg-right-bottom`}>
      <div className="flex h-full flex-col justify-center items-start padding-container max-container">
        <div className="w-[450px]">
          <h2>{title}</h2>
          <Button type="button" title="Learn More" variant="btn_hot_pink"></Button>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="relative flex flex-col lg:mb-10 lg:py-20 xl:mb-20">
      <div className="h-[340px] w-full lg:h-[400px] xl:h-[640px]">
        <CtaParallax backgroundImage="bg-bg-img-3" title="Find out why more people are choosing Poppy." />
      </div>
    </section>
  )
}

export default Camp
