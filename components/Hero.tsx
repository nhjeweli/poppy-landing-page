import Link from "next/link"

interface HeroProps {
  backgroundImage: string
  title: string
  subtitle: string
}

const HeroSite = ({ backgroundImage, title, subtitle }: HeroProps) => {
  return (
    <div className={`h-full w-full md:w-full sm:w-full ${backgroundImage} bg-cover bg-center bg-no-repeat flex justify-center flex-col`}>
      <div className="padding-container max-container md:padding-container md:max-container sm:padding-container sm:max-container w-[867px] md:w-full sm:w-full w- m-auto md:min-w-0 md:padding-container ">
        <div className="flex">
          <span className="line"></span>
          <h4 className="text-hotPink-10 uppercase bold mb-4">Welcome</h4>
        </div>
        <h1 className="regular-60 md:regular-40 sm:regular-40 text-white mb-4">
          {title}
          <span className="text-hotPink-10 bold">.</span>
        </h1>
        <p className="regular-18 text-white">{subtitle}</p>
        <Link href="#" className="scroll-icon-link md:hidden sm:hidden">
          <div className="icon-scroll">
            <span className="scroll-dot animate-scroll-move"></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero">
      <HeroSite backgroundImage="bg-bg-img-1" title="The simple, affordable cremation choice" subtitle="Poppy provides a modern solution in the form of direct cremation. With transparent pricing and a straightforward process, Poppy is here to serve your family when you need us." />
    </section>
  )
}

export default Hero
